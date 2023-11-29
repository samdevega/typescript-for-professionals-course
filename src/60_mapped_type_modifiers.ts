(() => {
  // Mapped Type Modifiers with Types
  type Point = {
    readonly x: number,
    y?: number
  }

  // The negative modifier removes the modifiers of the original type
  type Mapped<T> = {
    -readonly [P in keyof T]-?: T[P]
  }

  type Result = Mapped<Point>

  // Mapped Type Modifiers with Classes (Partial is already implemented by TypeScript)
  /**
   *  type Partial<T> = {
        [P in keyof T]?: T[P]
      }
   */
  class State<T> {
    constructor(public current: T) {}
    update(next: Partial<T>) {
      this.current = { ...this.current, ...next }
    }
  }

  const state = new State({ x: 0, y: 0 })
  state.update({ y: 1 })
  console.log(state.current) // { x: 0, y: 1 }
})()