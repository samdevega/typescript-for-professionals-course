(() => {
  // Example A
  type Math = {
    double(): void
    half(): void
  }

  // Single declaration for this type
  const math: Math & ThisType<{ value: number }> = {
    double(
      // this: { value: number }
    ) {
      this.value *= 2
    },
    half(
      // this: { value: number }
    ) {
      this.value /= 2
    }
  }

  const obj = {
    value: 1,
    ...math
  }

  obj.double()
  console.log(obj.value) // 2
  obj.half()
  console.log(obj.value) // 1
  obj.value.toUpperCase() // Error


  // Example B
  type StateDescription<D, M> = {
    data: D
    methods: M & ThisType<D & M> // this refers to anything within data and methods
  }

  function createState<D, M>(description: StateDescription<D, M>): D & M {
    return { ...description.data, ...description.methods }
  }

  let state = createState({
    data: { x: 0, y: 0 },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx
        this.y += dy
      }
    }
  })

  state.x = 10
  state.y = 20
  state.moveBy(5, 5)
})()