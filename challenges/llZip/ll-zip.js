'use strict'
const linkedlist = require('../linkedList/linked-list.js')

function zipLists(list1, list2) {

    if (!list1.head || !list2.head) {
        return 'Exception: must provide 2 non-empty lists'
    };
    let current1 = list1.head;
    let current2 = list2.head;
    let outputList = new linkedlist
    //   both lists are one node long
    if (!current1.next && !current2.next) {
        outputList.insert(current1.data)
        outputList.append(current2.data)
        return outputList;
    } else {
        //  console.log("the else isrunnnnnnnning ")
        outputList.insert(current1.data)
        while (current1!== null || current2!== null) {
            // console.log("WHILE LOOP IS RUNNING ")
            if (current2 == null){
                console.log("list2 reached ",current2)
            } else {
                outputList.append(current2.data)
            }
            current2 = current2.next
            // console.log("did it break here")
            current1 = current1.next
            // console.log("or here")
            if (current1 == null) {
                console.log("list1 reached")
            } else  {
                outputList.append(current1.data)
            }


        }
        return outputList
    }

}
module.exports = zipLists