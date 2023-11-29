(() => {
  const str = {
    hello: 'world'
  }

  console.log(str['hello']) // world

  const nums = {
    1337: 'leet'
  }

  console.log(nums[1337]) // leet

  // Index signature example
  type Dictionary = {
    [key: string]: boolean
  }

  // Use
  type Person = {
    displayName: string
    email: string
  }

  type PersonDictionary = {
    [username: string]: Person | undefined // Avoid runtime error
  }

  const persons: PersonDictionary = {
    jane: { displayName: 'Jane Doe', email: 'jane.doe@example.com' }
  }
  persons['john'] = { displayName: 'John Doe', email: 'john.doe@example.com' }

  console.log(persons['john'])
  delete persons['john']

  const result = persons['missing']
  console.log(result, result.email) // undefined. Runtime error if not specified manuall

  persons['john'] = { displayName: 'John Doe', emale: 'john.doe@example.com' } // Typo Error
})()