// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const rxp = new RegExp('bear', 'gi')
//   let matches = document.documentElement.innerHTML.match(rxp)
//   const matchesCount = () => {
//     if (matches) {
//       return matches.length
//     } else {
//       return "ZERO"
//     }
//   }
//   sendResponse({
//     count: matchesCount()
//   })
// });

const rxp = new RegExp('bear', 'gi')
let matches = document.documentElement.innerHTML.match(rxp)
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})
