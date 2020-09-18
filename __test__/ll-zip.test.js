'use strict';
const linkedlist = require('../challenges/linkedList/linked-list');
const zipLists = require('../challenges/llZip/ll-zip');

let link1 = new linkedlist;
let link2 = new linkedlist;
let link3 = new linkedlist;
let link4 = new linkedlist;
link1.insert(1);
link1.append(2);
link1.append(5);
link2.insert(7);
link2.append(8);
link2.append(9);

describe(' ziplist  ', () => {
  test('It should return error massage if empty list is passed ', () => {

    expect(zipLists(link3, link4)).toBe('Exception: must provide 2 non-empty lists');
  });
});
describe(' ziplist  ', () => {
  test('It should return mirged lists if input is valid ', () => {

    expect((zipLists(link1, link2)).toString()).toBe(`{ 1 } -> { 7 } -> { 2 } -> { 8 } -> { 5 } -> { 9 } -> NULL`);
  });
});
