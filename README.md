# data-structures-and-algorithms
Table of content 

# Table of Contents
1. [array-reverse](#Reverse an Array)
2. [Shiftmid](#Shift to mid)


____________________________________________

## Reverse an Array
<!-- Short summary or background information -->
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Challenge
<!-- Description of the challenge -->
reversing the array Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
well we want to loop manuall over the array , after we make an empty array to store the content of that array but in revrse so we let the counter for the loop strat from the last index and insert that value into the first index if the new arr and give a counter going up for the value of it's index .
## Solution
<!-- Embedded whiteboard image -->
![image](assets/reverse.PNG)

## Shift to mid
<!-- Short summary or background information -->
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.


<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
well we want to loop  over the array , after we make an empty array to store the content of that array  ,so we found the celing of the mid point for the arr.length we insert values normal up until the mid point then we leave the loop and insert the number into the array with the midpoint as the index then we continue normaly from after the index
## Solution
<!-- Embedded whiteboard image -->
![image](assets/shiftMid.jpg)