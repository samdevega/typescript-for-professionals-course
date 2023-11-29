(() => {
  // Construct a type with a set of properties of K of type T (already implemented by TypeScript)
  /**
   *  type Record<K extends keyof any, T> = {
   *    [P in K]: T
   *  }
   */
  type People = Record<string, { name: string, role: string }>
  const people: People = {}
  people['001'] = { name: 'John', role: 'admin' }
  people['002'] = { name: 'Jane', role: 'owner' }

  people['003'] = { name: 'Foo' } // Error: role is missing

  type PeopleVerbose = { [key: string]: { name: string, role: string } }


  // Use case: Safe access to properties
  type Role = 'admin' | 'owner'
  let peopleWithRoles: Record<Role, string[]> = {
    'admin': ['John'],
    'owner': ['Jane', 'Foo']
  }
  peopleWithRoles = {
    'owner': ['Jane', 'Foo']
  } // Error: admin is missing

  const admins: string[] = peopleWithRoles['admin'] // Safe. Never undefined


  // Use case: Quick Type creation
  // Same as { x: number, y: number }
  type Point = Record<'x' | 'y', number>

  // Use case: Reduce verbosity
  type PageInfo = {
    id: string,
    title: string
  }

  type PagesVerbose = {
    home: PageInfo,
    services: PageInfo,
    about: PageInfo,
    contact: PageInfo
  }

  type Pages = Record<'home' | 'services' | 'about' | 'contact', { id: string, title: string }>
})()