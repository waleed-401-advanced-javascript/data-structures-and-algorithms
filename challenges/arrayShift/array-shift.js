'use strict';

// eslint-disable-next-line no-unused-vars
function insertShiftArray(arr, num) {

  let midpoint = Math.ceil(arr.length / 2);
  let newArray = [];
  for (let i = 0; i < midpoint; i++) {
    newArray[i] = arr[i];
  }
  newArray[midpoint] = num;
  for (let i = midpoint; i < arr.length; i++) {
    newArray[i + 1] = arr[i];
  }
  return newArray;



}

