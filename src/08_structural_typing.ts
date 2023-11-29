(() => {
  type User = { id: string }
  type Product = { id: string }

  let user: User = { id: 'foo123' }
  let product: Product = { id: 'bar456' }

  user = product
  product = user


  type Point2D = { x: number, y: number }
  type Point3D = { x: number, y: number, z: number }

  let point2D: Point2D = { x: 0, y: 10 }
  let point3D: Point3D = { x: 0, y: 10, z: 20 }

  point2D = point3D // Duck Typing
  point3D = point2D // Error
})()