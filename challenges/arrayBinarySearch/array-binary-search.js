'use strict';

function binarySearch(arr, key) {
  let i = 0;
  let j = arr.length;
  let matching = -1;
  let midpoint = Math.ceil((j + i) / 2);
  while ((midpoint !== i) && (midpoint !== j) && (matching === -1)) {
    let matchCheck = arr[midpoint];
    console.log(matchCheck);
    console.log(midpoint);
    console.log('run');
    if (matchCheck === key) {
      matching = midpoint;
      return matching;
    } else if (matchCheck < key) {
      i = midpoint;
      midpoint = Math.ceil((j + i) / 2);
    } else if (matchCheck > key) {
      j = midpoint;
      midpoint = Math.ceil((j + i) / 2);
      console.log(midpoint);
      console.log('end');
    }

  }

  if (key == arr[0]) {
    matching = 0;
  }


  return matching;
}



