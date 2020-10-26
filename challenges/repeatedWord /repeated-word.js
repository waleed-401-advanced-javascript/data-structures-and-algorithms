'use strict';

const HashTable = require('../hashtables/hashtable');

module.exports = function repeatedWord(str) {
  if (str){
    let splitted = str.toLowerCase().split(' ');
    console.log('splitted',splitted);
    console.log('splitted[i]',splitted[0]);
    console.log(typeof splitted[0]);
    let hashT = new HashTable(150);
    for(let i = 0;i < splitted.length;i++){
      
      if(hashT.contains(splitted[i])){return splitted[i];}else{
        console.log(hashT.contains(splitted[i]));
        console.log('add',[splitted[i]]);
        hashT.add(splitted[i],'1');
      }
      
    }
  } else {
    return 'please enter a valid string';
  }
  return('0 matches');
};


