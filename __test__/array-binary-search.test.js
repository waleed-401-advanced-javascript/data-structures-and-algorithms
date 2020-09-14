'use strict';

function binarySearch(arr, key){
  let i = 0;
  let j = arr.length;
  let matching = -1;
  let midpoint = Math.ceil((j+i)/2);
  while ((midpoint!==i)&&(midpoint!==j)&&(matching === -1) ){
    let matchCheck = arr[midpoint];
 
    if(matchCheck === key){
      matching = midpoint;
      return matching;
    } else if (matchCheck < key){
      i = midpoint;
      midpoint = Math.ceil((j+i)/2);
    } else if (matchCheck > key){
      j = midpoint;
      midpoint = Math.ceil((j+i)/2);
      
    }
    
  }
  
  if (key == arr[0]){
    matching = 0;}
  
  
  return matching;
}



describe('Array Binary Search - Less Than', () => {
  test('It should return the index position of a value that is less than the midpoint value', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });
});

describe('Array Binary Search - More Than', () => {
  test('It should return the index position of a value that is less than the midpoint value', () => {
    expect(binarySearch([4,8,15,16,23,42], 42)).toStrictEqual(5);
  });
});

describe('Array Binary Search - Value Not Present', () => {
  test('It should return a -1 if the value is not present in the array', () => {
    expect(binarySearch([4,8,15,16,23,42], 12)).toStrictEqual(-1);
  });
  describe('Array Binary Search - Value is in the first index',() => {
    test('It should return a 0 if the value is  present in the first index', () => {
      expect(binarySearch([4,8,15,16,23,42], 4)).toStrictEqual(0); 
    });
  });
  
});