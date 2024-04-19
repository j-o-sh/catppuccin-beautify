// vite magic automatically creates a style tag here...
// TODO how to turn this off!
import './lib/pickr.css'

setTimeout(()=> {
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

  let initialHide
  document.addEventListener('keydown', e => {
    const { code, altKey, shiftKey, ctrlKey } = e
    if (code !== 'BracketRight' || !altKey || !shiftKey || !ctrlKey) return

    pickr.classList.toggle('hidden')
    if (initialHide !== undefined) {
      clearTimeout(initialHide)
      initialHide = undefined
    }
  })
  
  document.body.append(pickr)
  initialHide = setTimeout(() => {
    pickr.classList.toggle('hidden', true)
    initialHide = undefined
  }, 2500)
})
