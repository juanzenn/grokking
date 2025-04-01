export class Queue<T> {
  private items: T[] = [];

  // Adds an element at the end of the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Removes an element from the front of the queue and returns it
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Returns whether the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Returns the number of elements in the queue
  size(): number {
    return this.items.length;
  }
}
