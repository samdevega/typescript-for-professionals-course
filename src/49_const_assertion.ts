(() => {
  const king = 'elvis'
  king = 'john' // Error
  const upperCased = king.toUpperCase() // king === 'elvis'

  const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging']
  } as const // converts primitives to literal types, makes properties as readonly

  dave = {
    name: 'grohl',
    role: 'singer',
    skills: ['drumming', 'headbanging', 'singing']
  } // Error

  dave.name = 'grohl'
  dave.role = 'singer'
  dave.skills.push('singing')

  // Apply it to the most specific point possible. E.g:
  function layout(settings: {
    align: 'left' | 'center' | 'right',
    padding: number
  }) {
    console.log('Performing layout:', settings)
  }

  const example = {
    align: 'left' as const,
    padding: 0
  }

  layout(example)
})()