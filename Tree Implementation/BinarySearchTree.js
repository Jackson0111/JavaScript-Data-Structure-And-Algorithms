/**
* Here we will implement the Binary Search Tree data structure
* A BST is a binary tree that only allows the left child to be smaller than the parent and right child to be bigger than the parent.
* We will define Node and BST in this file.
*/

// First we define Node, which holds the value as well as left child and right child pointers.
function Node(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

// We also need to define Binary Search Tree with an empty root.
// This is because when we create an instance of BST, we will know where the root is, aka, where the tree structure begins.
function BinarySearchTree(){
    this.root = null;
}

// Now we can implement some built-in functions for our BST - such as push, which adds a new node to its proper position in the tree.
BinarySearchTree.prototype.push = function(key){
    // Before we add the node, we need to check for a special case - is the tree empty?
    // If the tree is empty, we simply add a new node to the root, then end the function.Our job is done.
    if (!this.root){
        this.root = new Node(key);
        return;
    }
    
    // If the tree is not empty, now we can proceed to find the proper position for this new node starting from the root.
    var currentNode = this.root;
    var newNode = new Node(key);
    while (currentNode){
        // Let's compare the key values of the currentNode and the newNode to see which side we need to go down.
        if (key < currentNode.key){
            // If the key is smaller than the parent's key, then obviously we need to go to the left side
            if (!currentNode.left){
                // If the left node is null, we will position the newNode here and end the loop. Our job is done.
                currentNode.left = newNode;
                return;
            }else {
                // If the left node is not null, then we need to go down a level.
                currentNode = currentNode.left;
            }
        }else {
            // We do the same steps on the right side
            if (!currentNode.right){
                currentNode.right = newNode;
                return;
            }else {
                currentNode = currentNode.right;
            }
        }
    }
}

