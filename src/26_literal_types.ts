(() => {
  type CardinalDirection = 'North' | 'West' | 'South' | 'East'

  let direction: CardinalDirection = 'North' // Allowed
  direction = 'West' // Allowed
  direction = 'Foo' // Not allowed

  function move(distanceInMeters: number, direction: CardinalDirection) {
    console.log(`Moving ${distanceInMeters} meters towards ${direction}`)
  }


  type DiceValue = 1 | 2 | 3 | 4 | 5 | 6

  function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) as DiceValue
  }

  if (rollDice() === 7) {
    throw new Error('Not possible!')
  }
})()