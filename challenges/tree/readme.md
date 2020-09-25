# Stacks and Queues
<!-- Short summary or background information -->
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
  - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Create a BinarySearchTree class
  - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
## Challenge
<!-- Short summary or background information -->
The challenge is to be able to utilize the new idea of recurssion in the traversing of the tree and in the populatinf of the binary search tree .
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
we will need to check if the value inputed to be smaller than the root value if so we will check if the node has value in it left  if not we assign it there  if it does we check the if the number is bigger or smaller if it bigger we go right if it is lower we go left until it finds  a node that holds no value in it's left or right dependnig on the value.
- The Big O time complexity for adding a new node is O(n)
- Searching for a specific node will also be O(n)


## Whiteboared
![image](../../../assets/challenge-15.png)