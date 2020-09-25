'use strict';


class binaryTree{

  constructor(root = null){
    this.root=root;
  }
  
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

} 


module.exports=binaryTree;

