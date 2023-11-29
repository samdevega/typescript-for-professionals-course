(() => {
  const center = {
    x: 0,
    y: 0,
    z: 0
  }

  // type Point = typeof center

  // Inline
  const unit: typeof center = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1
  }

  // Create a type from JSON
  const response = {
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }

  type PersonResponse = typeof response

  function processResponse(person: PersonResponse) {
    console.log('Full name:', `${person.firstName} ${person.lastName}`)
  }
})()