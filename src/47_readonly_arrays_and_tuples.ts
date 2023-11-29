(() => {
  // Arrays
  function reverseSorted(input: readonly number[]): number[] {
    return input.slice().sort().reverse()
  }

  const start = [1, 2, 3, 5, 4]
  const result = reverseSorted(start)
  console.log('start:', start) // [1, 2, 3, 5, 4]
  console.log('result:', result) // [5, 4, 3, 2, 1]
  const newArray: ReadonlyArray<number> = [0, 1, 2, 3]


  // Tuples
  type Point = readonly [number, number]

  function move(point: Point, x: number, y: number): Point {
    return [point[0] + x, point[1] + y]
  }

  const point: Point = [0, 0]
  const moved = move(point, 10, 10)
  console.log('point:', point) // [0, 0]
  console.log('moved:', moved) // [10, 10]
})()