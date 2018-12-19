
async function RUN_APP() {
  // todo: remove in production:
  browser.tabs.reload();    // this will reload current page

}


browser.runtime.onMessage.addListener((data, sender) => {
  switch (data.type) {

  }
});

// when user clicks the toolbar icon, execute "content script" in current page
browser.browserAction.onClicked.addListener(async tab => {
  await injectFile('utils.js');
  await injectFile('page_text_extractor.js');
  await injectFile('node_animator.js');
  await injectFile('input_controller.js');
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