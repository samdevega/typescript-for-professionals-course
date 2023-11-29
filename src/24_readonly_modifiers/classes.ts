(() => {
  class Animal {
    readonly name: string

    constructor(name: string) {
      this.name = name
    }
  }

  const sheep = new Animal('sheep')
  console.log(sheep.name) // Allowed
  sheep.name = 'wolf' // Not allowed
})()