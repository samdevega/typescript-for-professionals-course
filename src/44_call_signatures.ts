(() => {
  // Interfaces and Types
  interface AddInterface {
    (a: number, b: number): number
  }

  type AddType = (a: number, b: number) => number
  type AddTypeBlock = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
    debugName?: string
  }

  const addWithInterface: AddInterface = (a: number, b: number) => a + b
  const addWithType: AddType = (a: number, b: number) => a + b
  const addWithTypeBlock: AddTypeBlock = (a: number, b: number, c?: number) => a + b + (c || 0)
  addWithTypeBlock.debugName = 'Addition Function'


  // Classes
  // Short form
  // type PointCreator = new (x: number, y: number) => { x: number, y: number }
  // Long form
  type PointCreator = {
    new (x: number, y: number): { x: number, y: number }
  }
  const Point: PointCreator = class {
    constructor(public x: number, public y: number) {}
  }

  // All ways combined
  type PointCreatorWays = {
    new (x: number, y: number): { x: number, y: number }
    new (x: number, y: number, z: number): { x: number, y: number, z: number }
    (x: number, y: number): { x: number, y: number }
    (x: number, y: number, z: number): { x: number, y: number, z: number }
    debugName: string
  }
})()