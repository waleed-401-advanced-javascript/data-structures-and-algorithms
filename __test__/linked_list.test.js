const linkedlist = require('../challenges/linkedList/linked-list');
const l1 = new linkedlist;
const l2 = new linkedlist;
l1.insert(1);
l1.append(2);
l1.append(5);
describe(' list include  ', () => {
  test('It should return true ', () => {

    expect(l1.includes(1)).toBeTruthy();
  });
});
describe('list not include', () => {
  test('It should return false', () => {
    expect(l1.includes(15)).toBeFalsy();
  });
});
describe('return a collection ', () => {
  test('It should return { 1 } ->{ 2 } -> { 5  } -> NULL', () => {
    expect(l1.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 5 } -> NULL');
  });
  describe('append ', () => {
    test('It should append a new node with value 6 to the list ', () => {
      expect(l1.append(6).toString()).toStrictEqual(`{ 1 } -> { 2 } -> { 5 } -> { 6 } -> NULL`);
    });
  });
  describe('Insert before ', () => {
    test('It should ADD 9 to the list before the 2 ', () => {
      expect(l1.insertBefore(2 , 9).toString()).toStrictEqual(`{ 1 } -> { 9 } -> { 2 } -> { 5 } -> { 6 } -> NULL`);
    });
  });
  describe('Insert after ', () => {
    test('It should ADD 9 to the list after the  2 ', () => {
      expect(l1.insertAfter(2 , 9).toString()).toStrictEqual(`{ 1 } -> { 9 } -> { 2 } -> { 9 } -> { 5 } -> { 6 } -> NULL`);
    });
  });
  describe('Insert after ', () => {
    test('it should return  This is not a vlaid input ', () => {
      expect(l2.insertAfter(2 , 9).toString()).toStrictEqual(`This is not a vlaid input`);
    });
  });
  describe('Insert before ', () => {
    test('it should return  This is not a vlaid input ', () => {
      expect(l2.insertBefore(2 , 9).toString()).toStrictEqual(`This is not a vlaid input`);
    });
  });
  describe('Kth from end before  when asked to look in an empty list', () => {
    test('it should return  This is not a vlaid input ', () => {
      expect(l2.kthFromEnd(9).toString()).toStrictEqual(`This is not a vlaid input`);
    });
  });
  describe('Kth from end before  when asked about a value not in list', () => {
    test('it should return  This is not a vlaid input ', () => {
      expect(l1.kthFromEnd(44).toString()).toStrictEqual(`This is not a vlaid input`);
    });
  });
  describe('Kth from end before  when input is valid ', () => {
    test('it should return  the index of  ', () => {
      expect(l1.kthFromEnd(6)).toBe(0);
    });
  });
});



