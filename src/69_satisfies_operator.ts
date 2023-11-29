(() => {
  type Color = 'red' | 'green' | 'blue'
  type RGB = [red: number, green: number, blue: number]
  type Palette = Record<Color, string | RGB>

  const palette = {
    red: 'red',
    green: [0, 255, 0],
    blue: '#0000ff'
  } satisfies Palette

  const greenLevel = palette.green.at(1)
  const redUpperCased = palette.red.toUpperCase()
  const blueLevel = palette.blue.slice(-2)

  console.log(greenLevel) // 255
  console.log(redUpperCased) // RED
  console.log(blueLevel) // ff
})()