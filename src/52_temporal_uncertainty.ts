(() => {
  function buildExample() {
    return ['foo', null].at(Math.floor(Math.random() + 1))
  }

  let example: string | null | undefined = buildExample()

  if (example != null) {
    setTimeout(() => {
      example.toUpperCase() // Example can be null or undefined in a callback
    }, 1000)
  }

  if (example != null) {
    const localExample = example
    setTimeout(() => {
      localExample.toUpperCase() // Use a local scope variable
    }, 1000)
  }
})()