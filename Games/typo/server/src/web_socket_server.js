

const WebSocketServer = require('websocket').server;
const http = require('http');


// --------------------- HTTP server --------------------- //

const server = http.createServer((request, response) => {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.

  switch (request.url) {
    case '/api/level_1':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify({
        name: 'level_1',
        words: ['javascript', 'is', 'fun'],
      }));
      response.end();
      break;

  }


});
server.listen(50001, function() { });


// --------------------- WebSocket server --------------------- //

wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', request => {
  const connection = request.accept(null, request.origin);
  console.log('websocket opened');

  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', message => {
    if (message.type === 'utf8') {
      // process WebSocket message
      console.log('message:', message);
    }
  });

  connection.on('close', connection => {
    // close user connection
    console.log('websocket closed');
  });
});

