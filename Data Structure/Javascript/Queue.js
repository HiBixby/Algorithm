class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.first === null) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// let q = new Queue();
// console.log(q.enqueue("Hello"));
// console.log(q.enqueue("Hello1"));
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
