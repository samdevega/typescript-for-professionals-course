(() => {
  // Optional properties on types
  type Person = {
    name: string
    email: string
    phone?: string
  }

  const bruce: Person = {
    name: 'Bruce',
    email: 'bruce.banner@gotham.com',
    phone: '123'
  }

  const alfred: Person = {
    name: 'Alfred',
    email: 'alfred.pennyworth@gotham.com'
  }

  console.log(alfred.phone) // undefined


  // Optional properties on classes
  class Point {
    x?: number | null;
    y?: number;
  }

  const point = new Point()
  console.log(point.x) // undefined

  point.x = 0 // Allowed
  point.x = undefined // Allowed
  point.x = null // Not allowed unless you add it manually with union type
})()