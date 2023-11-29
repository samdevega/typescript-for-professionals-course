(() => {
  type Rectangle = {
    height: number
    width: number
  }

  type Square = {
    size: number
  }

  type Shape = Rectangle | Square

  function isRectangle(shape: Shape): shape is Rectangle {
    return 'height' in shape && 'width' in shape
  }
  
  function isSquare(shape: Shape): shape is Square {
    return 'size' in shape
  }

  function area(shape: Shape) {
    if (isRectangle(shape)) {
      return shape.height * shape.width
    }
    if (isSquare(shape)) {
      return shape.size * shape.size
    }
    const ensure: never = shape
    return ensure
  }
})()