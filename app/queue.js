export default class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(val) {
    this.arr.push(val);
  }

  peek() {
    return this.arr[0];
  }

  dequeue() {
    return this.arr.shift();
  }
}
