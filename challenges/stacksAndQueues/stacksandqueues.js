'use srict';
const Node = require('../linkedList/node');

class Stack {
  constructor() {
    this.top = null;
  }
  push(val){
    const node = new Node(val);
    node.next =this.top;
    this.top=node;
  }
  pop(){
    if(this.top){
      let holder =this.top;
      this.top=this.top.next;
      holder.next =null;
      return holder;
    }
    throw new RangeError('Cannot pop from an empty stack');
  }
  peek() {
    if (this.top) { return this.top; }
    throw new RangeError('Cannot peek an empty stack');
  }
  isEmpty() {
    return !this.top;
  }
}
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
    return temp.name;
  }
    
  peek() {
    if (this.front) { return this.front.name; }
    throw new RangeError('Cannot peek an empty queue');
  }
    
  isEmpty() {
    return !this.front;
  }
}
  
module.exports = { stack: Stack, queue: Queue };

