(() => {
  function double(this: { value: number }) {
    this.value = this.value * 2
  }

  const valid = {
    value: 10,
    double
  }
  const invalid = {
    valve: 10, // Typo
    double
  }

  valid.double()
  console.log(valid.value) // 20
  invalid.double() // Error
})()