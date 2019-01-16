/**
* Here we implement the pre order traversal of a Binary Search Tree.
* Pre order traversal will visit the parent first, then the left node and lastly the right node.
* For example, given a tree as shown below:
*                        11
*
*               7                  15
*
*           5       9         13        20
*
*        3    6   8   10    12   14  18   25
* The output after visiting every node using pre-order traversal will be:
* 11 -> 7 -> 5 -> 3 -> 6 -> 9 -> 8 -> 10 -> 15 -> 13 -> 12 -> 14 -> 20 -> 18 -> 25
**/

// Define the class, see more in BinarySearchTree.js
function Node(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.push = function(key){
    if(!this.root){
        this.root = new Node(key);
        return;
    }
    let currentNode = this.root;
    let newNode = new Node(key);
    while(currentNode){
        if (key < currentNode.key){
            // left
            if (!currentNode.left){
                currentNode.left = newNode;
                break;
            }else {
                currentNode = currentNode.left;
            }
        }else {
            // right
            if (!currentNode.right){
                currentNode.right = newNode;
                break;
            }else {
                currentNode = currentNode.right;
            }
        }
    }
}

var bst = new BinarySearchTree();
var nodes = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];
for(var i = 0; i < nodes.length; i++){
    bst.push(nodes[i]);
}

/**
* NOW WE BEGIN THE PRE ORDER IMPLEMENTATION
**/

function preOrderTraversal(node, callback){
    // This is the exit condition.
    // When we reach the bottom, we simply stop the recursion.
    if (node !== null){ 
        // We are at the current node, aka the parent of some node.
        // Print itself, aka visit itself.
        callback(node.key);
        // Then we visit the left child and keep going down until we reach the bottom on the left
        preOrderTraversal(node.left, callback);
        // Then we will visit the right child.
        preOrderTraversal(node.right, callback);
    }
}

function printNode(key){
    console.log(key);
}

preOrderTraversal(bst.root, printNode);