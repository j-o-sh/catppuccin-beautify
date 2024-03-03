// vite magic automatically creates a style tag here...
// TODO how to turn this off!
import './lib/pickr.css'

setTimeout(()=> {
  // const style = document.createElement('style')
  // style.innerHTML = `
  //   .flavour-pickr {
  //     position: stic
  //   }
  // `

  const pickr = document.createElement('div')
  pickr.classList.add('flavour-pickr')
  pickr.innerHTML = `
    <form>
      <label><input type="radio" name="pick" value="latte">🌻 Latte</label>
      <label><input type="radio" name="pick" value="frappe">🪴 Frappé</label>
      <label><input type="radio" name="pick" value="macciato">🌺 Macchiato</label>
      <label><input type="radio" name="pick" value="mocha">🌿 Mocha</label>
    </form>
    <p class="note">show/hide with Ctrl+Option+Shift+]</p>
  `

  pickr.addEventListener('change', ({ target: { value }}) => {
    document.body.dataset.catppuccinFlavour = value
  })

  document.addEventListener('keydown', e => {
    const { code, altKey, shiftKey, ctrlKey } = e
    if (code !== 'BracketRight' || !altKey || !shiftKey || !ctrlKey) return

    pickr.classList.toggle('hidden')
  })
  
  // document.head.append(style)
  document.body.append(pickr)
})
