(() => {
  // Property as its type
  type Circle = {
    kind: 'circle'
    radius: number
  }

  type Rectangle = {
    kind: 'rectangle'
    height: number
    width: number
  }

  type Square = {
    kind: 'square'
    size: number
  }

  type Shape = Circle | Rectangle | Square

  function area(shape: Shape) {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * (shape.radius ** 2)
      case 'rectangle':
        return shape.height * shape.width
      case 'square':
        return shape.size * shape.size
    }
  }

  console.log(area({ kind: 'square', size: 2 })) // 4
  console.log(area({ kind: 'rectangle', height: 2, width: 4 })) // 8

  // Property as boolean
  type ValidationSuccess = {
    isValid: true
    validatedValue: string
  }

  type ValidationFailure = {
    isValid: false
    errorReason: string
  }

  type ValidationResult = ValidationSuccess | ValidationFailure

  function logResult(result: ValidationResult) {
    if (result.isValid) {
      console.log(`Success, validated value: ${result.validatedValue}`)
    } else {
      console.error(`Failure, error reason: ${result.errorReason}`)
    }
  }
})()