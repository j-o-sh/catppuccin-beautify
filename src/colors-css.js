import { flavors } from '@catppuccin/palette'

const defaults = {
  basic: 'macchiato',
  light: Object.entries(flavors).find(([, { dark }]) => !dark)[0],
  dark: Object.entries(flavors).find(([, { dark }]) =>  dark)[0]
}

/**
 * @param {import '@catppuccin/palette'.FlavorName} flavorName
 */
function cssVariablesFor(flavorName, pad = 2) {
  const padStr = Array(pad).fill(' ').join('')
  return flavors[flavorName].colorEntries
    .map(([name]) => `${padStr}--ctp-${name}: var(--ctp-${flavorName}-${name});`)
    .join('\n')
}

/**
 * @param {import '@catppuccin/palette'.FlavorName} flavorName
 */
function flavorCssFor(flavorName) {
  return `body[data-catppuccin-flavour=${flavorName}] {
${cssVariablesFor(flavorName)}
}`
}

export const css = `
@import '@catppuccin/palette/css/catppuccin.css';

:root {
${cssVariablesFor(defaults.basic)}
}

@media ( prefers-color-scheme: light ) {
  :root {
${cssVariablesFor(defaults.light, 4)}
  }
}

@media ( prefers-color-scheme: dark ) {
  :root {
${cssVariablesFor(defaults.dark, 4)}
  }
}

${Object.keys(flavors).map(flavor => flavorCssFor(flavor)).join('\n\n')}

body {
  background-color: var(--ctp-mantle);
  color: var(--ctp-text);
}
`
