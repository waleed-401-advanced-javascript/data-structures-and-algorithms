# merge sort 
# Challenge Summary
<!-- Short summary or background information -->
The problem domain  is that  you want to sort the numbers from lowest to biggest. using merge sorting.

## Challenge Description
<!-- Description of the challenge -->
In merge sorting  we used divide and conquer we split the array into left and right arrays until they are an array of one number and then merge them back in the ascending order.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Big O Efficiency:  

Time: O(n log(n)) - as the original array is sorted in half and then re-merged after sorting

Space: O(n) - At any given time, we have an additional results array that contains up to n indexes representing some or all of the sorted elements of the initial array.  The new results array is returned rather than altering the original array in place.
