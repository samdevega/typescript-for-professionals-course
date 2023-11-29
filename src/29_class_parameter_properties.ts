(() => {
  class Person {
    // Class Parameter Properties | Constructor Shorthand
    constructor(public age: number, public name: string) {}
  }

  const adam = new Person(20, 'Adam')
  console.log(adam.name, adam.age)
})()