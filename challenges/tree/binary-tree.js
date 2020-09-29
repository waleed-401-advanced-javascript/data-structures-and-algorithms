'use strict';
const { Queue } = require('../stacksAndQueues/stacksandqueues');
const Node =require('./tree-node');

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
  // One strategy for adding a new node to a binary tree
  // is to fill all "child spots from the top down.
  // To do so, we leverage breadth first traversal.
  // During the traversal, we will find the first node
  // that does not have 2 child nodes, and insert the
  // new node as a child.
  // Prefer filling from left to right.
  add(val) {
    const q = new Queue();
    let current = this.root;
    if (!current) {
      this.root = new Node(val);
      return;
    }
    q.enqueue(current);
    while (q.peek()) {
      current = q.dequeue();
      if (!current.left) {
        current.left = new Node(val);
        return;
      }
      if (!current.right) {
        current.right = new Node(val);
        return;
      }
      q.enqueue(current.left);
      q.enqueue(current.right);
    }
  }
}
module.exports= binaryTree;