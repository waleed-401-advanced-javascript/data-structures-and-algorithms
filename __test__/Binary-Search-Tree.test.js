'use strict';
const Node = require('../challenges/tree/tree-node');
const BinarySearchTree =require('../challenges/tree/Binary-Search-Tree');

describe('Binary Search Tree', ()=> {


  it('Can successfully instantiate a tree with a single root node',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    expect(tree).toBeTruthy();
  });
  it('Can successfully add anumber smaller than node',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(16);
    console.log('trrrrr',tree);
    let treeContains = tree.contains(16);
    expect(treeContains).toBeTruthy();
  });
  it('Can successfully add anumber bigger than node',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(26);
    let treeContains = tree.contains(26);
    expect(treeContains).toBeTruthy();
  });
  it('Can successfully add anumber smaller than the node as a seconed child',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(16);
    tree.add(8);
    tree.add(6);
    console.log('trrrrr',tree);
    let treeContains = tree.contains(6);
    expect(treeContains).toBeTruthy();
  });
  it('Can successfully add anumber greater than the node as a seconed child',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(16);
    tree.add(18);
    console.log('trrrrr',tree);
    let treeContains = tree.contains(18);
    expect(treeContains).toBeTruthy();
  });
  it('Can successfully add anumber smaller than the node as a seconed child',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(16);
    tree.add(18);
    tree.add(26);
    tree.add(24);
    console.log('trrrrr',tree);
    let treeContains = tree.contains(24);
    expect(treeContains).toBeTruthy();
  });
  it('Can successfully add anumber greater than the node as a seconed child',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(26);
    tree.add(28);
    tree.add(16);
    console.log('trrrrr',tree);
    let treeContains = tree.contains(28);
    expect(treeContains).toBeTruthy();
  });
  it('it will retrn if you try to add a number that exists',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(26);
    console.log('trrrrr',tree);
    expect(tree.add(26)).toBeFalsy();
  });
  it('it will retrn if you try to add a number that exists',()=>{
    let one = new Node(20);
    let tree = new BinarySearchTree(one);
    tree.add(26);
    console.log('trrrrr',tree);
    let treeContains = tree.contains(28);
    expect(treeContains).toBeFalsy();
  });
    
});