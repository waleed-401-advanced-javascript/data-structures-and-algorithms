'use sttrict';

const Node = require('./tree-node');

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  add(data){
    const node = this.root;
    if (node===null){
      this.root = new Node(data);
      return;
    }else {
      const searchTree = (node)=>{
        if(data < node.value){
          if (node.left===null){
            node.left =new Node(data);
          }else if(node.left !== null){
            return searchTree(node.left);
          }
        }else if(data > node.value){
          if (node.right ===null){
            node.right= new Node(data);
          }else if (node.right!== null){
            return searchTree(node.right);
          }
        }else{
          return null;
        }
      };
      return searchTree(node);
    }

  }
  contains(data){
    let current = this.root;
    while(current){
      if(data ===current.value){
        return true; 
      }
      if (data < current.value){
        current=current.left;
      }else{
        current=current.right;
      }
     
    }
    return false;
  }

  
}

module.exports =BinarySearchTree;