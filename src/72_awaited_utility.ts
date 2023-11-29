(() => {
  async function main() {
    const single: Promise<string> = new Promise(result => result('Foo'))
    // The promise of a promise of a promise is a promise
    const triple: Promise<Promise<Promise<string>>> =
      new Promise<Promise<Promise<string>>>(result =>
        result(
          new Promise<Promise<string>>(result =>
            new Promise<string>(result =>
              result('Bar')
            )
          )
        )
      )
    
    const singleResult = await single
    console.log(singleResult) // Foo
    const tripleResult = await triple // TypeScript detects that variable is string type
    console.log(tripleResult) // Bar

  }
})()