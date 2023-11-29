(() => {
  // Uses of never
  function error(message: string): never {
    throw new Error(message)
  }

  const notAllowed: never = 'some string'
  const allowed: never = error('Some message')
  const example: string = error('Another message')
  type Verbose = string | never
  type Concise = string

  // Exclude null and undefined from T
  type NoEmpty<T> = T extends null | undefined ? never: T
  type Example = NoEmpty<string | null>
  type Explanation1 = NoEmpty<string> | NoEmpty<null>
  type Explanation2 = (string extends null | undefined ? never : string)
    | (null extends null | undefined ? never: string)
  type Explanation3 = string | never
  type Explanation4 = string
})()