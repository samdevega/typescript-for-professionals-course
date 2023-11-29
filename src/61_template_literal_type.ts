(() => {
  let jsStringLiteral
  jsStringLiteral = 'hello'
  jsStringLiteral = "world"

  let jsTemplateLiteral
  jsTemplateLiteral = `Example: ${jsStringLiteral}` // Example: world


  let str: string
  str = 'whatever'

  // Literal Type
  let strLiteral: 'hello'
  strLiteral = 'hello' // This is ok
  strLiteral = 'oh oh' // This is not

  // Template Literal Type
  let templateLiteral: `Example: ${string}`
  templateLiteral = 'Example: hello'
  templateLiteral = 'Example: world'
  templateLiteral = 'Without Example prefix' // Not allowed


  // Use cases
  // Typing CSS Values
  type CssValue =
    // implies px
    | number
    // number + px|em|rem|%
    | `${number}px`
    | `${number}em`
    | `${number}rem`
    | `${number}%`
  
  function size(input: CssValue) {
    return typeof input == 'number' ? input + 'px' : input
  }

  size(16)
  size('16px')
  size('1em')
  size('1rem')
  size('10%')
  size('1rex') // Typo

  // Typing style
  type Size = 'small' | 'medium' | 'large'
  type Color = 'primary' | 'secondary'
  type Style = `${Size}-${Color}`

  function applyStyle(style: Style) {}

  applyStyle('small-primary')
  applyStyle('large-secondary')
  applyStyle('medim-primary') // Typo
})()