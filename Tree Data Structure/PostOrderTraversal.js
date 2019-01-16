/**
* Post order traversal visits the left node, then right node and then the parent node.
* For example, given a tree as shown below:
*                        11
*
*               7                  15
*
*           5       9         13        20
*
*        3    6   8   10    12   14  18   25
* The output after visiting every node using pre-order traversal will be:
* 3 -> 6 -> 5 -> 8 -> 10 -> 9 -> 7 -> 12 -> 14 -> 13 -> 18 -> 25 -> 20 -> 15 -> 11
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
            if (!currentNode.left){
                currentNode.left = newNode;
                break;
            }else {
                currentNode = currentNode.left;
            }
        }else {
            if (!currentNode.right){
                currentNode.right = newNode;
                break;
            }else {
                currentNode = currentNode.right;
            }
        }
    }
}

let bst = new BinarySearchTree();
let nodes = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];
for(let i = 0; i < nodes.length; i++){
    bst.push(nodes[i]);
}

/**
* NOW WE BEGIN THE POST ORDER TRAVERSAL IMPLEMENTATION
**/

function postOrderTraversal(node, callback){
    // Exit condition
    if (node !== null){
        // We visit the left and left and left until we reach the bottom
        postOrderTraversal(node.left, callback);
        // Then we visit the right and back to the parent.
        postOrderTraversal(node.right, callback);
        callback(node.key);
    }
}

function printNode(key){
    console.log(key);
}

postOrderTraversal(bst.root, printNode);