(() => {
  type Chain =
    | string
    | string[]

  function formatCommandLine(input: Chain) {
    let line = ''

    if (typeof input === 'string') {
      line = input.trim()
    }
    if (Array.isArray(input)) {
      line = input.map((substring: string) => substring.trim()).join(' ')
    }

    return line
  }

  console.log(formatCommandLine('Hello')) // Hello
  console.log(formatCommandLine(['Hello', ' World '])) // Hello World
})()