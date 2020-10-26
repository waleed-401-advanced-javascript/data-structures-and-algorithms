# Hashtables
<!-- Short summary or background information -->
 A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.
## Challenge
<!-- Description of the challenge -->
Implement a Hashtable with the following methods:

add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
add: big O (n) in worst case(collisions case) avarage is big O (1)
get: big O (1) in best case 
contains: big O (n) in worst case(collisions case) avarage is big O (1)
hash: Big O (1)
## API
<!-- Description of each method publicly available in each of your hashtable -->
add : it adds a key and value to the table and it handles collisions by appending the colidede values to the linked list.
get : it takes a key and gives back the value of that coresponds to the key .
contains : it returns true if the values that we are looking for exists in our table. 
hash : it takes the key and return an integer depending on the values of the keys . 