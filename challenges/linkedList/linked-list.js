'use strict';

class Node {
  /**
   * 
   * @param {This can take any value you want to assign for the node} val 
   */
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class linkedlist {
  constructor() {
    this.head = null;
  }
  /**
   * 
   * @param {This value will be assigned as the first node if list is empty} val 
   */
  insert(val) {
    let node = new Node(val);
    //console.log(node)
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  /**
 * 
 * @param {This function check of the value entered exist in the list} val 
 */
  includes(val) {
    let current = this.head;
    while (current !== null) {
      //console.log(count)
      if (current.data === val)
        return true;
      current = current.next;
    }
    return false;
  }
  /**
 * this turns the list to a string format
 */
  toString() {
    let current = this.head;
    let content = '';
    while (current !== null) {

      content = content + `{ ${current.data} } -> `;
      current = current.next;
    }
    return content + 'NULL';
  }
  /**
 * 
 * @param {This method appends the value entred to the last postion } val 
 */
  append(val) {
    let current = this.head;
    let node = new Node(val);
    while (current.next !== null) {
      current = current.next;

    }
    current.next = node;
    return this;
  }
  /**
 * 
 * @param {This the value to add before} val 
 * @param {This the new value to add } newVal 
 */

  insertBefore(val, newVal) {

    if (!this.head) {
      return ('This is not a vlaid input');
    }
    let current = this.head;
    let node = new Node(newVal);

    while (current.next !== null) {
      if (current.next.data === val) {
        let switchedVal = current.next;
        current.next = node;
        node.next = switchedVal;
        return this;
      }

      current = current.next;
    }


  }
  /**
 * 
 * @param {This the value to add after} val 
 * @param {This the new value to add } newVal 
 */

  insertAfter(val, newVal) {
    if (!this.head) {
      return ('This is not a vlaid input');
    }

    let current = this.head;
    let node = new Node(newVal);

    while (current.next !== null) {
      if (current.next.data === val) {


        current = current.next;
        let switchedVal = current.next;
        current.next = node;
        node.next = switchedVal;
        return this;
      }

      current = current.next;
    }


  }

  /**
   * 
   * @param {value to look for } k 
   */
  kthFromEnd(k) {
    if (!this.head) {
      return ('This is not a vlaid input');
    } else if (!this.includes(k)) {
      return ('This is not a vlaid input');
    } else {
      let length = 0;
      let counter = 0;
      let current = this.head;
      let currentSeconedLoop = this.head;
      while (current.next !== null) {
        length++;
        current = current.next;


      }
      console.log('len', length);
      while (currentSeconedLoop.data !== k && currentSeconedLoop !== null) {
        counter++;
        currentSeconedLoop = currentSeconedLoop.next;

      }
      console.log('counter', counter);
      return length - counter;


    }



  }







}

module.exports = linkedlist;