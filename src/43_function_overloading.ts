(() => {
  // Function overloads
  function reverse(string: string): string
  function reverse(stringArray: string[]): string[]
  // Function implementation (all cases)
  function reverse(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray == 'string') {
      return stringOrStringArray.split('').reverse().join('')
    } else {
      return stringOrStringArray.slice().reverse()
    }
  }

  const hello = reverse('hello') // olleh
  const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']) // ['o', 'l', 'l', 'e', 'h']


  // Function overload
  function makeDate(timestamp: number): Date
  function makeDate(year: number, month: number, day: number): Date
  // Function implementation (all cases)
  function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
      return new Date(timestampOrYear, month - 1, day)
    } else {
      return new Date(timestampOrYear)
    }
  }

  const doomsday = makeDate(2000, 1, 1) // 1 Jan 2000
  const epoch = makeDate(0) // 1 Jun 1970
  const invalid = makeDate(2000, 1) // Not allowed
})()