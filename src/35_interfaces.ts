(() => {
  // With ype aliases
  type Point2D = {
    x: number
    y: number
  }

  type Point3D =
    & Point2D
    & { z: number }

  const pointWithType: Point3D = {
    x: 0,
    y: 0,
    z: 0
  }

  // With instances
  interface Point2DI {
    x: number
    y: number
  }

  interface Point3DI extends Point2DI {
    z: number
  }

  const pointWithInterface: Point3DI = {
    x: 0,
    y: 0,
    z: 0
  }
})()