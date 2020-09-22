'use strict';
/**
 * 
 * @param {*A string to validate that these type of brackets '(','[','{' are open and closed each time with no
 * intesection between 2 diffrent types of brackets}  input 
 */

function multiBracketValidation(input){
  let chars = input.split('');
  let checker = ['g'];
  for(let i = 0;i < input.length ;i++){
    if (chars[i] === '{'){

      if ( checker.includes('c') || checker.includes('b')){
        return false;
      }else{
        checker.pop('g');
        checker.push('s');
        console.log(checker);
      }
    }
    if(chars[i]==='}' ){
      console.log(checker);
      if (checker.includes('c') || checker.includes('b')){
        return false;
      }else {
        if (checker.includes('s')){
          checker.pop('s');
        }
        checker.push('g');
        console.log(checker);
      }

    }
    if (chars[i] === '['){
    
      if (checker.includes('c') || checker.includes('s')){
        return false;
      }else{
        console.log(checker);
        checker.pop('g');
        checker.push('b');
    
      }
    }
    if(chars[i]===']'){
      console.log(checker);
      if (checker.includes('c') || checker.includes('s')){
        return false;
      }else{
        console.log(checker);
        if (checker.includes('b')){
          checker.pop('b');
        }
        checker.push('g');
      }
    }
    if (chars[i] === '('){
   
      if (checker.includes('b') || checker.includes('s')){
        return false;
      }else{
        checker.pop('g');
        checker.push('c');
        console.log(checker);
      }
    }
    if(chars[i]===')'){
      if (checker.includes('s') || checker.includes('b')){
        return false;
      }else{
        if (checker.includes('c')){
          checker.pop('c');
        }
        checker.push('g');
        console.log(checker);
      }

    }

  }
  console.log(checker);
  if (checker.includes('g')){return true;}else{
    return false;}
}
module.exports=multiBracketValidation;