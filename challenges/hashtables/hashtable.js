'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
    
  print() {

  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
            
    } else {
           
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  } 
  includes(val) {
    let current = this.head;
    while (current !== null) {
      // console.log('current.value',current.value)
      // console.log('val.key',current.value)
      // console.log('key',val)
      let key = Object.keys(current.value);
      // console.log('key',key)
      if (key[0] === val)
        return true;
      current = current.next;
    }
    return false;
  }
 

  
}

class HashTable {

  constructor(size) {
    this.size = size;
    this.entries = new Array(size); // bucket
  }

  /**
 * 
 * @param {*it takes a key and return an intger} key 
 */
  hash(key) {
    // return hash Index
    let charArr = key.split('');
    return charArr.reduce((p, n )=> {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  /**
 * 
 * @param {*it takes the key of the pair you want to add} key 
 * @param {*it takes the value of the key} value 
 */
  add(key, value) {
    // Linked List to represent the value for each key in the bucket
    let hashIndex = this.hash(key);
    console.log('hashIndex: ',hashIndex);
    if(!this.entries[hashIndex]) {
      // create a new one
      this.entries[hashIndex] = new LinkedList();
    }

    let entry = { [key]: value };
    this.entries[hashIndex].append(entry); // LinkedList append method
  }

  get(key) {
    let hashIndex = this.hash(key);
    if (this.contains(key)){
      let current = this.entries[hashIndex].head;
      while(current !== null){
        let data = Object.entries(current.value);
        if (data[0][0]=== key){
          return data[0][1]; 
        
        }
        current = current.next;
    
      }
    }else{ return null;}
  }
  contains(key) {
    let hashIndex = this.hash(key);
    if(this.entries[hashIndex]){
      return this.entries[hashIndex].includes(key);
    } 
    return false;
   
  }
}
module.exports =HashTable;