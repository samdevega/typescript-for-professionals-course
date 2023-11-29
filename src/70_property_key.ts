(() => {
  const str: string = 'key'
  const num: number = 123
  const sym: symbol = Symbol()

  // Valid object keys
  const valid = {
    [str]: 'valid',
    [num]: 'valid',
    [sym]: 'valid',
  }

  const obj = {}

  // Anything else is invalid
  const invalid = {
    [obj]: 'invalid'
  }

  type ValidKey = keyof any // Already created by TypeScript as...

  let example: PropertyKey
  example = str
  example = num
  example = sym
  example = obj // Invalid
})()