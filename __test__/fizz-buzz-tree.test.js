'use strict';

const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');
const  BinaryTree  = require('../challenges/tree/binary-tree');
const Node =require('../challenges/tree/tree-node');

describe('`fizzBuzzTree` function', () => {
  it('should return `null` if the argument is not a tree', () => {
    expect(fizzBuzzTree(0)).toBeNull();
  });
  it('should return an empty tree if the argument `root` is `null`', () => {
    const bt = new BinaryTree();
    expect(fizzBuzzTree(bt)).toEqual(bt);
  });
  it('should replace the `root` value with the right word if it is divisible by 3, 5, or both', () => {
    const bt = new BinaryTree();
    bt.add(15);
    expect(fizzBuzzTree(bt).root.value).toBe('FizzBuzz');
  });
  it('should replace values divisible by `3` with `Fizz`', () => {
    const bt = new BinaryTree();
    bt.add(3);
    bt.add(6);
    bt.add(9);
    bt.add(12);
    bt.add(18);
    bt.add(21);
    bt.add(24);
    const result = fizzBuzzTree(bt);
    expect(result.root.value).toBe('Fizz');
    expect(result.root.left.value).toBe('Fizz');
    expect(result.root.right.value).toBe('Fizz');
    expect(result.root.left.left.value).toBe('Fizz');
    expect(result.root.left.right.value).toBe('Fizz');
    expect(result.root.right.left.value).toBe('Fizz');
    expect(result.root.right.right.value).toBe('Fizz');
  });
  it('should replace values divisible by `5` with `Buzz`', () => {
    const bt = new BinaryTree();
    bt.add(5);
    bt.add(10);
    bt.add(20);
    bt.add(25);
    bt.add(35);
    bt.add(40);
    bt.add(45);
    const result = fizzBuzzTree(bt);
    expect(result.root.value).toBe('Buzz');
    expect(result.root.left.value).toBe('Buzz');
    expect(result.root.right.value).toBe('Buzz');
    expect(result.root.left.left.value).toBe('Buzz');
    expect(result.root.left.right.value).toBe('Buzz');
    expect(result.root.right.left.value).toBe('Buzz');
    expect(result.root.right.right.value).toBe('FizzBuzz');
  });
});