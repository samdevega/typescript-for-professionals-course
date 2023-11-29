(() => {
  type IsArray<T> =
    T extends Array<infer Member>
    ? 'array'
    : 'other'
  
  type WithArray = IsArray<string[]>
  type WithOther = IsArray<number>

  type UnboxArray<T> =
    T extends Array<infer Member>
    ? Member
    : T
  type UnboxedStringArray = UnboxArray<string[]>
  type UnboxedNumberArray = UnboxArray<number[]>
  type anythingElse = UnboxArray<string>


  // Use case: Generate the type on the fly when input of functionB depends on output of functionA
  function createPerson(firstName: string, lastName: string) {
    return {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`
    }
  }

  // Explanation
  /**
   *  type ReturnType<T> =
        T extends (...args: any) => infer R
        ? R
        : never
      type Person = ReturnType<typeof createPerson>
   */
  // Inline
  function logPerson(person: ReturnType<typeof createPerson>) {
    console.log(
      'Person:',
      person.firstName,
      person.lastName,
      person.fullName
    )
  }
})()