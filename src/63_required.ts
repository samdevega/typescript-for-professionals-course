(() => {
  // Makes all properties in T required (already implemented by TypeScript)
  /**
   *  type Required<T> = {
        [P in keyof T]-?: T[P]
      }
   */

  type PartialPoint = { x?: number, y?: number }
  // Same as { x: number, y: number }
  type Point = Required<PartialPoint>


  // Use case
  // Optional members for consumers
  type CircleConfig = {
    color?: string
    radius?: number
  }

  class Circle {
    // Required: all members will be present
    private config: Required<CircleConfig>
    constructor(config: CircleConfig) {
      this.config = {
        color: config.color ?? 'black',
        radius: config.radius ?? 0
      }
    }
    draw() {
      // No null check needed
      console.log(`
      Drawing a circle.
      Color: ${this.config.color}
      Radius: ${this.config.radius}
      `)
    }
  }
})()