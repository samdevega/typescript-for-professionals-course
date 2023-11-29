(() => {
  function log(message: string): void {
    console.log('LOG: ', message)
  }

  function sum(...values: number[]) {
    return values.reduce((previous, current) => previous + current)
  }

  sum(1, 2)
  sum(1, 2, 3)

  type Add = (a: number, b: number) => number
  let add: Add
  add = (a: number, b: number): number => a + b
})()