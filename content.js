chrome.runtime.onMessage.addListener(function (request) {
  const regexp = new RegExp('bear', 'gi')
  let matches = document.documentElement.innerHTML.match(regexp)

  matches = matches ? matches : "ZERO"

  alert(`We found  ${matches.length} bears on this page.`)
});
