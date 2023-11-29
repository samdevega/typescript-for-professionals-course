(() => {
  type Age = { age: number }
  type Name = { name: string }
  // Union: A-AB-B
  type Union = Age | Name
  // Intersection: AB
  type Intersection = Age & Name
  
  const age = { age: 30 }
  const name = { name: 'John' }
  const nameAndAge = { age: 30, name: 'John' }

  let union: Union
  union = name
  union = age
  union = nameAndAge

  let intersection: Intersection
  intersection = nameAndAge
  intersection = age // Error
  intersection = name // Error
})()