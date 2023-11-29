(() => {
  type Point = {
    x: number
    y: number
  }

  let point: Point

  function initialize() {
    point = { x: 0, y: 0 }
  }

  initialize()
  console.log('After initialized:', point!.x, point!.y) // Non-null assertion operator !.
  
  // It is best to avoid it if you can. E.g:
  /**
   * function initialize(): Point {
   *  return { x: 0, y: 0 }
   * }
   * 
   * const point = initialize()
   */


  type Person = {
    name: string
    email?: string | null
  }

  function sendEmail(email: string) {
    console.log('Sent email to', email)
  }

  function ensureContactable(person: Person) {
    if (person.email == null) {
      throw new Error(`Person ${person.name} is not contactable`)
    }
  }

  function contact(person: Person) {
    ensureContactable(person)
    sendEmail(person.email!) // It can be avoided moving the null condition inside the function
  }

  function altContact(person: Person) {
    if (person.email == null) {
      throw new Error(`Person ${person.name} is not contactable`)
    }
    sendEmail(person.email)
  }
})()