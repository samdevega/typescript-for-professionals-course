(() => {
  class Animal {
    private name: string // Using # for private properties is not compatible with ES5 while TS private modifier is

    constructor(name: string) {
      this.name = name
    }

    move(distanceInMeters: number): void {
      console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
  }
})()