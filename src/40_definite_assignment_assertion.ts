(() => {
  let dice!: number // Definite assignment assertion ! (tells TypeScript that this variable will always be assigned)

  function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1)
  }

  rollDice()
  console.log('Current dice value:', dice) // No complains
  
  rollDice()
  console.log('Current dice value:', dice) // No complains


  // In classes
  class Point {
    x!: number
    y!: number

    constructor() {
      this.moveRandom() // Removes duplication. Needs definite assignment assertion in properties
    }

    moveRandom() {
      this.x = Math.random()
      this.y = Math.random()
    }
  }
})()