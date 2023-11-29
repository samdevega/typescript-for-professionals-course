(() => {
  let anyExample: any
  let unknownExample: unknown

  anyExample = 123
  anyExample = 'Hello'

  unknownExample = 123
  unknownExample = 'World'

  // any bypasses TS system
  anyExample.allows.chain.anything.you.can.imagine()
  let anySetBool: boolean = anyExample

  // unknown needs safe typecheck
  unknownExample.trim() // Error
  let unknownSetBool: boolean = unknownExample // Error

  if (typeof unknownExample == 'string') {
    unknownExample.trim()
  }

  if (typeof unknownExample == 'boolean') {
    let unknownSetBool: boolean = unknownExample
  }
})()