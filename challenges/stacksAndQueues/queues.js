'use strict';
const Node = require('../linkedList/node');
class Queue {
  constructor(){
    this.front = null;
  }
    
  enqueue(value) {
    if(this.isEmpty()) {
      this.front = new Node(value);
      this.rear = this.front;
    } else {
      this.rear.next = new Node(value);
      this.rear = this.rear.next;
    }
  }
    
  dequeue() {
    if(this.isEmpty()) {
      throw new RangeError('Cannot dequeue an empty queue');
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.data;
  }
    
  peek() {
    if (this.front) { return this.front.data; }
    throw new RangeError('Cannot peek an empty queue');
  }
    
  isEmpty() {
    return !this.front;
  }
}
  
module.exports = Queue;