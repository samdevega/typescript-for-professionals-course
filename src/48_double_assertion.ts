(() => {
  type Point2D = { x: number, y: number }
  type Point3D = Point2D & { z: number }
  type Person = { name: string, email: string }

  let point2: Point2D = { x: 0, y: 0 }
  let point3: Point3D = { x: 10, y: 10, z: 10 }
  let person: Person = { name: 'John', email: 'john.doe@example.com' }

  // Force assignment with Type Assertion
  point2 = point3 // No problem cause Point3D has x and y
  point3 = point2 as Point3D // TypeScript trust us because 1 direction of equivalence is possible point2 = point3
  point3 = person as Point3D // TypeScript do not trust us
  point3 = person as unknown as Point3D // TypeScript trust us

  /**
   * Possible Use Cases:
   * - Migrating some JS code
   * - Temporary use while refactoring legacy code
   */
})()