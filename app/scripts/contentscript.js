const waitForElement = function (query, run) {
  // set up the mutation observer
  const observer = new MutationObserver(function (mutations, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    const canvas = document.querySelector(query)
    if (canvas) {
      run(canvas)
      me.disconnect() // stop observing
    }
  })

  // start observing
  observer.observe(document, {
    childList: true,
    subtree:   true,
  })
}
let cep_btn, cep_input, cep_numero = '65048-410'

switch (window.location.host) {
  case 'www.magazineluiza.com.br':
    cep_btn    = 'button.input__zipcode-button'
    cep_input  = 'input[name=zipcode]'
    

    waitForElement(cep_btn, (el) => {
      setValue(cep_input, cep_numero)
      click(cep_btn)
    })
    break
  case 'www.magazinevoce.com.br':
    cep_btn    = 'button.btn-product-shipment'
    cep_input  = 'input#zipcode'

    waitForElement(cep_btn, (el) => {
      setValue(cep_input, cep_numero)
      click(cep_btn)
    })
    break
  case 'www.centauro.com.br':
    cep_btn   = 'input[type=submit][value="Calcular"]'
    cep_input = 'input[type=tel]'

    waitForElement(cep_btn, (el) => {
      setValue(cep_input, cep_numero)
      click(cep_btn)
    })
    break
}

const click = function (query) {
  const el = document.querySelector(query)

  const trigger = new MouseEvent('click', {
    view:       window,
    bubbles:    true,
    cancelable: true,
  })

  el.dispatchEvent(trigger)
}

const setValue = function (query, value) {
  document.querySelector(query).value = value
}