import {WS} from "./web_socket.js";

async function RUN_APP() {
  // todo: remove in production:
  await browser.tabs.reload();    // this will reload current page
  const tabs = await browser.tabs.query({});
  const wikiTab = tabs.find(t => t.url.includes('wikipedia.org'));
  if (!wikiTab) await browser.tabs.create({url: 'https://www.wikipedia.org/'});

  await WS.init();
}


browser.runtime.onMessage.addListener((data, sender) => {
  WS.send('score', data);
  switch (data.type) {

  }
});


// when user clicks the toolbar icon, execute "content script" in current page
browser.browserAction.onClicked.addListener(async tab => {
  if (await browser.tabs.sendMessage(tab.id, {type: 'ping'}).catch(() => false)) {   // if the script is already injected, we reload the page
    await browser.tabs.reload();
    await timeoutPromise(500);
  }
  await injectFile('utils.js');
  await injectFile('page_text_extractor.js');
  await injectFile('node_animator.js');
  await injectFile('input_controller.js');
  await injectFile('words_controller.js');
  await injectFile('statistics_controller.js');
  await injectFile('multi_player_controller.js');
  await injectFile('list_controller.js');
  await injectFile('screen_controller.js');
  await injectFile('typo.js');


  async function injectFile(fileName) {
    return browser.tabs.executeScript(tab.id, {
      allFrames: false,
      file: fileName,
      runAt: 'document_start'
    });
  }
});




RUN_APP();