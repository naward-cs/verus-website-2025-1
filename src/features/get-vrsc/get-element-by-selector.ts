import type {HTMLElement} from 'node-html-parser'

// Safely get element by exact CSS selector
export const getElementBySelector = (root: HTMLElement, selector: string) => {
  try {
    // If this is an ID selector, use getElementById directly
    if (selector.startsWith('#')) {
      const id = selector.substring(1) // Remove the # character
      return root.getElementById(id)
    }

    const selectorParts = selector.split(' > ')
    let element = root.querySelector(selectorParts[0])

    if (!element) {
      console.log(
        `Could not find element with selector part: ${selectorParts[0]}`
      )
      return null
    }

    for (let i = 1; i < selectorParts.length; i++) {
      const part = selectorParts[i]

      if (part.startsWith('div:nth-child(')) {
        const match = part.match(/\((\d+)\)/)
        if (!match) return null

        const index = parseInt(match[1]) - 1
        const children = element.querySelectorAll('div')

        if (index < 0 || index >= children.length) {
          console.log(
            `Child index ${index + 1} is out of bounds. Total children: ${children.length}`
          )
          return null
        }

        element = children[index]
      } else {
        element = element.querySelector(part)

        if (!element) {
          console.log(`Could not find element with selector part: ${part}`)
          return null
        }
      }
    }

    return element
  } catch (error) {
    console.error('Error parsing selector:', selector, error)
    return null
  }
}
