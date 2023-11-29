(() => {
  type TypeA = Uppercase<'type_a'> // TYPE_A
  type TypeB = Lowercase<'TYPE_B'> // type_b
  type TypeC = Capitalize<'type_c'> // Type_c
  type TypeD = Uncapitalize<'Type_d'> // type_d


  // Use case (combined with template literal type)
  type Getter<T extends string> = `get${Capitalize<T>}`
  type Setter<T extends string> = `set${Capitalize<T>}`

  type Name = 'name'
  type GetName = Getter<Name>
  type SetName = Setter<Name>
})()