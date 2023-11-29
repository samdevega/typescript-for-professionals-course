(() => {
  // Functions
  function padLeft(value: string, padding: number | string) {
    switch (typeof padding) {
      case 'number':
        return Array(padding + 1).join(' ') + value
      case 'string':
        return padding + value
      default:
        throw new Error(`Expected number or string, got '${typeof padding}'.`)
    }
  }

  console.log(padLeft('Hello World', 3))     // '   Hello World'
  console.log(padLeft('Hello World', '   ')) // '   Hello World'
  console.log(padLeft('Hello World', '---')) // '---Hello World'

  // Class Instance
  class Cat {
    meow() {
      console.log('Meow!')
    }
  }

  class Dog {
    bark() {
      console.log('Woof!')
    }
  }

  type Animal = Cat | Dog

  function speak(animal: Animal) {
    if (animal instanceof Cat) {
      animal.meow()
    }
    if (animal instanceof Dog) {
      animal.bark()
    }
  }

  // Class Properties
  type Square = {
    size: number
  }

  type Rectangle = {
    height: number
    width: number
  }

  type Shape = Square | Rectangle

  function area(shape: Shape) {
    if ('size' in shape) {
      return shape.size * shape.size
    }
    if ('height' in shape && 'width' in shape) {
      return shape.height * shape.width
    }
  }

  console.log(area({ size: 2 })) // 4
  console.log(area({ height: 2, width: 4 })) // 8
})()