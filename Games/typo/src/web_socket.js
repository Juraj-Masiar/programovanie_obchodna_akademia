


const WS_URL = 'ws://pi.fastaddons.com:50001/ws/global';

let _connection = {readyState: 3, close: noop, send: noop};   // init with dummy

export const WS = {
  init: init,
  send: send
};
Object.freeze(WS);

// init phase:
function init() {
  connect();
}

function send(type, data) {
  _connection.send(JSON.stringify({
    type: type,
    data: data,
    version: getTime()
  }));
}

async function onMessage(e) {
  const data = JSON.parse(e.data);
  console.log('WS: message received', data);
}

async function connect() {
  _connection.close();
  _connection = new WebSocket(WS_URL);
  _connection.onopen = onOpen;
  _connection.onmessage = onMessage;
}
function onOpen(e) {
  console.log('WS: connected', e);
  send('uuid');
}

