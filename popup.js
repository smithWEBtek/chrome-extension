document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click',
    whenClicked, false)

    function whenClicked() {
      chrome.tabs.query({ currentWindow: true, active: true },
        function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, "Hi")
        }
      )
    }
})
