(() => {
  type Person = {
    age: number
    location: string
    name: string
  }

  const john: Person = {
    age: 34,
    location: 'Dallas',
    name: 'John'
  }

  // keyof returns the union of keys of a given type
  function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    const value = obj[key]
    console.log('Getting:', key, value)
    return value
  }

  const age = logGet(john, 'age') // 34

  // Generic: < ... >
  // Generic constraint: ...extends keyof Obj
  // Local type: Obj[key]
  function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
    console.log('Settings', key, value)
    obj[key] = value
  }

  logSet(john, 'age', 36)
})()