'use strict';

// eslint-disable-next-line no-unused-vars
function reverseArray(arr) {
  let reversed = [];
  let counters = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed[counters] = arr[i];
    counters++;
  }
  return reversed;
}