'use strict';
const { Queue } = require('../stacksAndQueues/stacksandqueues');

class binaryTree{

  constructor(root = null){
    this.root=root;
  }
  // node left right
  preOrder(){
    let output =[];
    let _travarse =(node)=>{
      output.push(node.value);
      if(node.left)  _travarse(node.left);
      if(node.right) _travarse(node.right);
    };
    _travarse(this.root);
    return output;
  }
  // left node right
  inOrder(){
    let output=[];
    let _travarse =(node)=>{
      if(node.left) _travarse(node.left);
      output.push(node.value);
      if(node.right)_travarse(node.right);
    };
    _travarse(this.root);
    return output;
  }
  // left right node
  postOrder() {
    let output = [];
    let _travarse =(node)=>{
      if(node.left)_travarse(node.left);
      if(node.right)_travarse(node.right);
      output.push(node.value);
    };
    _travarse(this.root);
    return output;
  }
  findMaximumValue(){
    let output = 0;
    let _travarse =(node)=>{
      
      if(node.value > output){output=node.value;}
      if(node.left)  _travarse(node.left);
      if(node.right) _travarse(node.right);
    };
    _travarse(this.root);
    return output;

  }
  breadthFirst() {
    const q = new Queue();
    let current = this.root;
    const values = [];
    if (!current) {
      return null;
    }
    q.enqueue(current);
    while (q.peek()) {
      current = q.dequeue();
      values.push(current.value);
      if (current.left) {
        q.enqueue(current.left);
      }
      if (current.right) {
        q.enqueue(current.right);
      }
    }
    return values;
  }

}


module.exports=binaryTree;

