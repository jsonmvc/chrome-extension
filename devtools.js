chrome.devtools.panels.create(
  'JSONMVC',
  'icon.png',
  'panel.html',
  onCreated
);

function onCreated(panel) {
  console.log('[JSONMVC] tab created')
  console.log('Panel created:', panel);
}

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log('received something', request, sender)
  });