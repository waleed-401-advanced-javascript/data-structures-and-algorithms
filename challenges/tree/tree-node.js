'use strict';

class Node {
  constructor(val,left = null,right = null){
    this.value =val;
    this.left=left;
    this.right=left;
  }
}

module.exports = Node;