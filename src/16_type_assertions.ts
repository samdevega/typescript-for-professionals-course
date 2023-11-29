(() => {
  function load(): unknown {
    return ''
  }

  let hello = load()
  // Type assertion
  const trimmed = (hello as string).trim()
  // Alt type assertion. Not supported by tsx files
  const altTrimmed = (<string>hello).trim()
})()