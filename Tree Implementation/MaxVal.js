/** 
* Find the maximum value in a binary search tree.
* It's obvious that the rightmost node on the highest level of the tree has the maximum value.
* This is because the in a binary search tree, the right node is greater than the parent and the left node.
* Therefore, the below functions will travel to the bottom of the tree and find the right most node.
**/

function Node(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.push = function(key){
    if (!this.root){
        this.root = new Node(key);
        return;
    }
    let currentNode = this.root;
    let newNode = new Node(key);
    while(currentNode){
        if (key < currentNode.key){
            if (currentNode.left === null){
                currentNode.left = newNode;
                break;
            }else {
                currentNode = currentNode.left;
            }
        }else {
            if (currentNode.right === null){
                currentNode.right = newNode;
                break;
            }else {
                currentNode = currentNode.right;
            }
        }
    }
}

/** 
* NOW WE BEGIN THE IMPLEMENTATION FOR MAX VAL
**/

BinarySearchTree.prototype.maxVal = function(node){
    // First step, we need to find out whether node is null.
    // If it's not, we proceed to deeper levels
    if (node){
        // For every higher level we go to, we need to check if the right child is null.
        while(node.right !== null){
            node = node.right;
        }
        // This is when we reach the bottom, simply return the current node key.
        return node.key;
    }
    // If node is null, we simply return null.
    return null;
}


// Let's test it.

let bst = new BinarySearchTree();
let nodes = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];
for (let i = 0; i < nodes.length; i++){
    bst.push(nodes[i]);
}

console.log(bst.maxVal(bst.root));