(() => {
  type AltToEnum =
    | 'app'
    | 'email'
    | 'social'

  function doSomething(alt: AltToEnum) {}

  doSomething('app') // Check refactoring of type
  doSomething('') // Check autocomplete
})()