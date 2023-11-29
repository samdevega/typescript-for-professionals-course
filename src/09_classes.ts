(() => {
  class Animal {
    protected name: string

    constructor(name: string) {
      this.name = name
    }

    move(distanceInMeters: number): void {
      console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
  }

  class Bird extends Animal {
    fly(distanceInMeters: number): void {
      console.log(`${this.name} flew ${distanceInMeters}m.`)
    }
  }

  let cat = new Animal('Cat')
  cat.move(10)
  cat.name = 'Dog' // Error

  let bird = new Bird('Bird')
  bird.fly(10)
})()