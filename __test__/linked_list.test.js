 const linkedlist = require('../challenges/linkedList/linked-list');
 const l1 = new linkedlist
 l1.insert(1);
l1.insert(2);
l1.insert(5);
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
    test('It should return { 1 } -> { 2 } -> { 5 } -> NULL', () => {
        expect(l1.toString()).toStrictEqual("{ 1 } -> { 2 } -> { 5 } -> NULL");
    });
  });


