(() => {
  // Array
  let array: number[] = [1, 2, 3]

  // Usage
  array = [1]
  array = [1, 2, 3, 4, 5]
  array = ['hello'] // Error

  // Tuple
  let tuple: [number, number] = [0, 0]

  // Usage
  tuple = [1, 1]
  tuple = [2, 4]
  tuple = [6] // Error
  tuple = [2, 4, 6] // Error
  tuple = ['foo', 8] // Error
})()