class HashTable {
  constructor(size){
    this.size = size;
    this.entries = new Array(size);
  }
  
  hash(key){
    let charArr= key.split('');
    return charArr.reduce((p,n)=>{
      return p+n.charCodeAt(0);
    },0)*599 %this.size; 
  }
  add(key){
      
    if(key){
      let keyIndex = this.hash(key);
      let indexArray =  this.entries[keyIndex];
      if(!this.entries[keyIndex]){
        let value = 0; 
        this.entries[keyIndex] = {key:key ,value:value };
         
      }
      this.entries[keyIndex].value = 0;
      this.entries.push(indexArray);
  
    }else{ console.log('invalid input please enter a key');}
    
  }
}
  
function retriveHighestRepeated(str){
  let table = new HashTable(1024);
  let hightemp = 0;
  let mostUsed = [];
  if(str){
    let splitted = str.tolowercase().split(' ');
    splitted.forEach((e)=>{table.add(e);},
    );
    console.log('table',table);
  
    
    for(let i =0;  i < table.length;i++){
      if(table[i][1] > hightemp){
        mostUsed =table[i][0];
        hightemp= table[i][1];
      }
    }} else {console.log('invalid input please enter a key');} 
  return mostUsed;
}
  
let try1 = 'hello please be working okay okay';
console.log(try1);
console.log(typeof(try1));
let x = retriveHighestRepeated(try1);
console.log(x);