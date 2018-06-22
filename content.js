console.log(window);

console.log('[CONTENT]')

chrome.runtime.sendMessage('fmfbkldjoomhikdncdellffmfadamepa', {greeting: "hello"}, function(response) {
  console.log(response);
});