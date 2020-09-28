'use strict';
const Node = require('../linkedList/node');
const que = require('../stacksAndQueues/queues');

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
  breadthfirst(){
    let output =[];
    let breadhtQue = new que;
    breadhtQue.enqueue(this.root);
    console.log('ooooooooooooooooooooooooooo',breadhtQue);
    console.log(breadhtQue.peek());
    while (breadhtQue.peek()){
      let value = breadhtQue.dequeue();
      output.push(value);
      console.log('kkkkkkkkkkkkkkkkkkkkkk',this);
      // if(this.front.data.left){
      //   breadhtQue.enqueue(this.front.data.left);
      // }
      // if(this.front.data.right){
      //   breadhtQue.enqueue(this.front.right);
      // }
    }
    return output;
  }

}


module.exports=binaryTree;

