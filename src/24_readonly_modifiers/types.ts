(() => {
  type Point = {
    x: number,
    y: number
  }

  const point: Point = {
    x: 0,
    y: 0
  }

  point = { x: 1, y: 1 } // Reassignment not allowed by const declaration
  point.x = 1; point.y = 1 // Mutation allowed

  type ImmutablePoint = {
    readonly x: number,
    readonly y: number
  }

  const immutablePoint: ImmutablePoint = {
    x: 0,
    y: 0
  }

  immutablePoint = { x: 1, y: 1 } // Reassignment not allowed by const declaration
  immutablePoint.x = 1; immutablePoint.y = 1 // Mutation not allowed by readonly declarations
})()