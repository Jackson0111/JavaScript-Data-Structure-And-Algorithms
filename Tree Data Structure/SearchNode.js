/**
* Below we will write a function that finds a specific node in a binary search tree.
* When doing so, we need to compare the key with subtrees.
* If the key is smaller than the parent, we will go to the left subtree.
* This is because the key is definitely smaller than the right child too as the right node is larger than the parent.
* Vice versa, if the key is larger than the parent, we will go to the right subtree.
* We repeat this step until we find the node with the same value, or we reach the bottom and find nothing.
**/

function Node(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.push = function(key) {
    if (!this.root){
        this.root = new Node(key);
        return;
    }
    let currentNode = this.root;
    let newNode = new Node(key);
    while(currentNode){
        if (key < currentNode.key){
            if (!currentNode.left){
                currentNode.left = newNode;
                return;
            }else {
                currentNode = currentNode.left;
            }
        }else {
            if (!currentNode.right){
                currentNode.right = newNode;
                return;
            }else {
                currentNode = currentNode.right;
            }
        }
    }
}

/** 
* NOW WE BEGIN THE IMPLEMENTATION FOR SEARCH NODE
* This function will return true if the node is found and false if not found
**/

BinarySearchTree.prototype.searchNode = function(node, key){
    // Assign this, aka our searchNode function to a variable called self.
    // We do this to avoid confusing situations regarding this pointer.
    let self = this;
    // First, we need to validate if the tree is empty
    // This also serves as the exit condition for our recursive calls
    // When we reach the bottom of the subtrees, aka find a null node, we will know that the key does not exist.
    if (!node){
        return false;
    }
    
    if (key < node.key){
        // The given value is smaller than the current node's value, so we go to the left subtree.
        // When the recursive call comes back, we need to return what the call returns, so we return it here.
        return self.searchNode(node.left, key);
    }else if (key > node.key){
        // The given value is larger than the current node's value, so we go to the right subtree.
        // When the recursive call comes back, we need to return what the call returns, so we return it here.
        return self.searchNode(node.right, key);
    }else if (key === node.key){
        // If we reach here, we will know the given value is equal to the node's key. 
        // We simply return true because we have found it.
        return true;
    }
}

// Let's test it.
let bst = new BinarySearchTree();
let nodes = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];
for (let i = 0; i < nodes.length; i++){
    bst.push(nodes[i]);
}

console.log(bst.searchNode(bst.root, 0));


