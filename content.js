chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const rxp = new RegExp('bear', 'gi')
  let matches = document.documentElement.innerHTML.match(rxp)
  const matchesCount = () => {
    if (matches) {
      return matches.length
    } else {
      return "ZERO"
    }
  }
  sendResponse({
    count: matchesCount()
  })
});
