document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click',
    onclick, false)

    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true },
        function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, "Hi", setCount)
        }
      )
    }

  function setCount(response) {
    const div = document.createElement('div')
    div.textContent = `${response.count ? response.count : 'ZERO'} bears found`
    document.body.appendChild(div)
  }
}, false)
