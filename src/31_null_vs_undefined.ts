(() => {
  let notDefined: undefined = undefined
  let notPresent: null = null

  class Point {
    public x: unknown
    public y: unknown
  }

  const center = new Point()
  center.x = 0
  console.log(center.x, center.y) // 0, undefined

  function logVowels(value: string) {
    console.log(value.match(/[aeiou]/gi))
  }

  logVowels('hello') // ['e', 'o']
  logVowels('sky')   // null


  // Check with double equal
  console.log(undefined == undefined) // true
  console.log(null == null) // true

  console.log(undefined == null) // true

  console.log(false == null) // false
  console.log(0 == null) // false
  console.log('' == null) // false

  function someBooleanOrNullOrUndefined() {
    return [true, false, null, undefined].at(Math.floor(Math.random() * 3 + 1))
  }

  const result = someBooleanOrNullOrUndefined()
  if (result == null) {
    console.log('null or undefined:', result)
  } else {
    console.log('boolean:', result)
  }


  // Guard clause
  function decorate(value: string | null | undefined) {
    if (value == null) {
      return value
    }
    return `-- ${value.trim()} --`
  }

  console.log(decorate('Hello')) // -- Hello --
  console.log(decorate(null)) // null
  console.log(decorate(undefined)) // undefined
})()