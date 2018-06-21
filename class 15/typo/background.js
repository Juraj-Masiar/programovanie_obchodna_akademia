

browser.runtime.onMessage.addListener((data, sender) => {
  switch (data.type) {

  }
});

browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(tab.id, {
    allFrames: false,
    file: 'utils.js',
    runAt: 'document_start'
  });
  browser.tabs.executeScript(tab.id, {
    allFrames: false,
    file: 'typo.js',
    runAt: 'document_start'
  })
});