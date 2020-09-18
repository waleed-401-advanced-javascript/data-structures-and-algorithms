'use strict';
class Queue {
    
  constructor() {
    this.storage = [];
  }
  /**
   * 
   * @param {add the value you want to push to the que} value 
   */
  enqueue(value) {
    this.storage.push(value);
  }
  /**
 * this will remove the value from the from of the que (The oldest entered value)
 */
  dequeue() {
    if (this.isEmpty()) {
      throw new RangeError('Queue is Empty!');
    }
    return this.storage.shift();
  }
  /**
   * This will peek at the last value entred
   */
  peek() {
    if (this.isEmpty()) {
      throw new RangeError('you can not peek and Empty Queue');
    }
    return this.storage[0];
  }
  /**
   *  will check if the que is empty
   */
  isEmpty() {
    return this.storage.length === 0;
  }
}
  
module.exports = Queue;