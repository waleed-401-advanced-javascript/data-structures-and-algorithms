'use strict';
const mergeSort = require('../challenges/mergeSort/merge-sort');

describe('merge sort ',() => {
  test('it should return the array sorted from lowest to biggest', () => {
    expect(mergeSort([4,8,5,6,3,2])).toStrictEqual([2,3,4,5,6,8]);
  });
});