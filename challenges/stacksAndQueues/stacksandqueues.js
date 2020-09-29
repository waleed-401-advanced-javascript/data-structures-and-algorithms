'use strict';
/**
 * Node class
 * @param data {*} The value stored in the instance of the Node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * @param  {} {this.top=null;}push(val
 * @param  {} {constnode=newNode(val
 * @param  {} ;node.next=this.top;this.top=node;}pop(
 * @param  {} {lettop;if(this.top.next
 * @param  {} {top=this.top;this.top=this.top.next;}elseif(this.top
 * @param  {} {top=this.top;this.top=null;}else{returnnull;}returntop.data;}peek(
 * @param  {} {if(this.top
 */
class Stack {
  constructor() {
    this.top = null;
  }
  // Push takes any value as an argument
  // and adds a new node with that value to the top
  // of the stack with an O(1) Time performance
  push(val) {
    const node = new Node(val); // create a new node
    node.next = this.top; // assign the new node's pointer to the current top
    this.top = node; // reassign the stack's top to the new node
  }

  // Pop does not take any argument, removes the node
  // from the top of the stack, and returns the node's value.
  pop() {
    let top;
    if (this.top.next) {
      top = this.top;
      this.top = this.top.next;
    } else if (this.top) {
      top = this.top;
      this.top = null;
    } else {
      return null;
    }
    return top.data;
  }
  // Peek does not take an argument and returns the value
  // of the node located at the top of the stack
  peek() {
    if (this.top) {
      return this.top.data;
    }
    return null;
  }
}
/**
 * @param  {} {this.back=null;this.front=null;}enqueue(val
 * @param  {} {constnode=newNode(val
 * @param  {} ;node.next=this.back;this.back=node;if(!this.front
 * @param  {} {this.front=node;}}dequeue(
 * @param  {} {letcurrent=this.back;if(!current
 * @param  {} {returnnull;}if(!current.next
 * @param  {} {this.back=null;this.front=null;returncurrent.data;}while(current.next&&current.next.next
 * @param  {} {current=current.next;}consttarget=current.next;current.next=null;this.front=current;returntarget.data;}peek(
 * @param  {} {if(!this.front
 * @param  {} {returnnull;}if(this.front
 */
class Queue {
  constructor() {
    this.back = null;
    this.front = null;
  }
  // Define a method called enqueue which takes any value
  // as an argument and adds a new node with that value to
  // the back of the queue with an O(1) Time performance.
  enqueue(val) {
    // NOTE THAT THIS IMPLEMENTATION POINTS THE `NEXT` POINTERS
    // IN THE WRONG DIRECTION. `NEXT` SHOULD START AT THE FRONT AND
    // POINT TOWARD THE BACK.
    const node = new Node(val);
    node.next = this.back;
    this.back = node;
    if (!this.front) {
      this.front = node;
    }
  }
  // Define a method called dequeue that does not take any
  // argument, removes the node from the front of the queue,
  // and returns the node’s value.
  dequeue() {
    let current = this.back;
    if (!current) {
      return null;
    }
    if (!current.next) {
      this.back = null;
      this.front = null;
      return current.data;
    }

    while (current.next && current.next.next) {
      current = current.next;
    }
    const target = current.next;
    current.next = null;
    this.front = current;
    return target.data;
  }
  // Define a method called peek that does not take an argument
  // and returns the value of the node located in the front of
  // the stack.
  peek() {
    if (!this.front) {
      return null;
    }
    if (this.front) {
      return this.front.data;
    }
  }
}

module.exports = { Node, Stack, Queue };