console.log(`'tst 'Allo! Popup`)

// Saves options to chrome.storage
function save_options() {
  let zipcode = document.getElementById('zipcode').value
  let calcado = document.getElementById('calcado').value
  let cintura = document.getElementById('cintura').value
  let camisa  = document.getElementById('camisa').value

  let options = {zipcode, calcado, cintura, camisa}

  browser.storage.sync.set(options)

  chrome.storage.sync.set(options, function () {
    // Update status to let user know options were saved.
    let status         = document.getElementById('status')
    status.textContent = 'Salvo!'
    setTimeout(function () {
      status.textContent = ''
    }, 750)
  })
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and calcado = true.
  chrome.storage.sync.get({
                            zipcode: '65',
                            calcado: '42',
                          }, function (items) {
    document.getElementById('zipcode').value = items.zipcode
    document.getElementById('calcado').value = items.calcado
    document.getElementById('cintura').value = items.cintura
    document.getElementById('camisa').value = items.camisa
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)

document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit()
}, false)