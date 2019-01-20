/**
* In-order traversal travels the Binary Search Tree from left to right using recursion.
* We start from the root and travel all the way down to the bottom level on the very left.
* Then go back up the parent node then down to the right node.
* For example, given a tree as shown below:
*                        11
*
*               7                  15
*
*           5       9         13        20
*
*        3    6   8   10    12   14  18   25
* The output after visiting every node using in-order traversal will be:
* 3 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 -> 18 -> 20 -> 25
**/

// Define the class (see more in BinarySearchTree.js):
function BinarySearchTree(){
    this.root = null;
}

function Node(key){
    this.key = key;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.push = function(key){
    if (!this.root){
        this.root = new Node(key);
        return;
    }
    
    var currentNode = this.root;
    var newNode = new Node(key);
    
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

// create the tree here:
var bst = new BinarySearchTree();
var nodes = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];
for(var i = 0; i < nodes.length; i++){
    bst.push(nodes[i]);
}

/**
* NOW WE BEGIN OUR IN-ORDER TRAVERSAL 
**/

var inOrderTraverseNode = function(node, callback){
    // This is the exit condition.
    // When we encounter an empty node, we stop.
    if(node !== null){ 
        // We use recursion to first go travel down to the left, when we reach the bottom, then go to the right.
        inOrderTraverseNode(node.left, callback);
        // This callback function that's being passed in will now get called and executed to do some operations.
        // Here, we are simply pringting out the current node.
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
    }
}

// This is the callback function we pass as a parameter to inOrderTraverseNode function.
// It will simply print every node we visit.
function printNode(key){
    console.log(key);
}

// When we execute this, we will get output:
// 3 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 -> 18 -> 20 -> 25
// Note that whatever order we have in the nodes array, this will be the same output because every node is being positioned into the right position.
inOrderTraverseNode(bst.root, printNode);
