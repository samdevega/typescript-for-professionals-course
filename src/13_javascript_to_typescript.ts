(() => {
  // uncontrolled
  let aLegacyVariable: any
  
  aLegacyVariable = 'foo'
  console.log(aLegacyVariable.trim())
  
  aLegacyVariable = 123
  console.log(aLegacyVariable.toFixed(2))


  // controlled
  let anotherLegacyVariable: unknown
  
  anotherLegacyVariable = 'foo'

  if (typeof anotherLegacyVariable == 'string') {
    console.log(anotherLegacyVariable.trim())
  }
  
  anotherLegacyVariable = 123

  if (typeof anotherLegacyVariable == 'number') {
    console.log(anotherLegacyVariable.toFixed(2))
  }
})()