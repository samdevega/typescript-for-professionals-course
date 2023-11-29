(() => {
  // In functions
  // TypeScript infers return type but we are explicit here for demo
  function fail(message: string): never {
    throw new Error(message)
  }

  // In variables
  let example: never

  // Use case: To be sure that all important cases are handled by code
  type Circle = {
    kind: 'circle'
    radius: number
  }

  type Rectangle = {
    height: number
    kind: 'rectangle'
    width: number
  }

  type Square = {
    kind: 'square'
    size: number
  }

  type Shape =
    | Circle
    | Rectangle
    | Square

  function area(shape: Shape) {
    if (shape.kind === 'rectangle') {
      return shape.height * shape.width
    } else if (shape.kind === 'square') {
      return shape.size * shape.size
    }
    const ensureAllCasesAreHandled: never = shape // This will complain until the case for Circle is handled
    return ensureAllCasesAreHandled
  }
})()