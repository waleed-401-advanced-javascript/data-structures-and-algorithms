'use strict';

class Stack {
  constructor() {
    // you need to do in Linked List.
    this.storage = [];
    this.top = null;
  }
  /**
   * check the top value of the stack
   */

  peek() {
    if (this.isEmpty()) {
      throw new RangeError('Cannot peek an empty stack');
    }
    return this.top;
  }
  /**
   * 
   * @param {*will push a value to the top of the stack} value 
   */

  push(value) {
    // pushing to a stack adds to the top FILO (First In Last Out)
    this.storage.unshift(value); // [3,2,1]
    this.top = value; // this.storage[0]
  }
  /**
   * will remove the newest value added
   */
  pop() {
    if (this.isEmpty()) {
      throw new RangeError('Can not pop');
    }
    let item = this.storage.shift();
    this.top = this.storage[0];
    return item;
  }
  /**
   *  will check if the que is empty
   */
  isEmpty() {
    return this.storage.length === 0;
  }

}
module.exports = Stack;

