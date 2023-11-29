(() => {
  /** FIFO Collection */
  class Queue<T> {
    protected data: Array<T> = []
    push(item: T) { this.data.push(item) }
    pop(): T | undefined { return this.data.shift() }
  }

  class NumberQueue extends Queue<number> {
    push(item: number) { this.data.push(item) }
    pop(): number | undefined { return this.data.shift() }
  }

  const numberQueue = new NumberQueue() // Specific Class
  const queue = new Queue<number> // Generic
  queue.push(123)
  queue.push(456)
  queue.push('Hello World!') // Error

  console.log(queue.pop()?.toPrecision(1))
  console.log(queue.pop()?.toPrecision(1))
})()