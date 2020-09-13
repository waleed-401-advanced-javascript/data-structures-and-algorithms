'use strict'

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class linkedlist {
  constructor() {
    this.head = null;
  }
  insert(val) {
    let node = new Node(val);
    //console.log(node)
    if (this.head === null) {
      this.head = node;
    } else {
      console.log("I think you want to append.")
    }
  }

  includes(val) {
    let current = this.head;
    while (current !== null) {
      //console.log(count)
      if (current.data === val)
        return true;
      current = current.next
    }
    return false
  }

  toString() {
    let current = this.head;
    let content = "";
    while (current !== null) {

      content = content + `{ ${current.data} } -> `
      current = current.next;
    }
    return content + 'NULL'
  }

  append(val) {
    let current = this.head;
    let node = new Node(val);
    while (current.next !== null) {
      current = current.next;
      console.log(current.data)
    }
    current.next = node;
    console.log(current.data)
  }


  insertBefore(val, newVal) {

    let current = this.head;
    let node = new Node(newVal);

    while (current.next !== null) {
      if (current.next.data === val) {
        let switchedVal = current.next
        current.next = node
        node.next = switchedVal
      }

      current = current.next;
    }


  }

  insertAfter(val, newVal) {
   
    let current = this.head;
    let node = new Node(newVal);

    while (current.next !== null) {
      if (current.next.data === val) {
       
       
        current = current.next
         let switchedVal = current.next
         current.next = node
         node.next = switchedVal
      }

      current = current.next;
    }


  }


}

module.exports = linkedlist;