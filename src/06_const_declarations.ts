(() => {
  type Point = { x: number, y: number }

  const point: Point = { x: 0, y: 0 }

  point = { x: 1, y: 1 } // Error

  // Allowed
  point.x = 2
  point.y = 2
})()