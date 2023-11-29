(() => {
  class Person {
    private _age: number

    constructor(age: number) {
      this._age = age
    }
    // Store class methods in variables so they can be used without the class instance reference
    growOld = () => {
      this._age++
    }

    age() {
      return this._age
    }
  }

  const person = new Person(0)
  person.growOld()
  console.log('age: ', person.age())
  // (avoid this is undefined)
  const growOld = person.growOld
  growOld()
  setTimeout(() => console.log('age: ', person.age()), 1000)
})()