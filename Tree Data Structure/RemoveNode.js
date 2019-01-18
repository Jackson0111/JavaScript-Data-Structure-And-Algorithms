/**
* When removing a node in a bst, there are three cases we need to handle.
* 1 - The node is a leaf node.
* 2 - The node has only one child.
* 3 - The node has two children.
* The complexity of removing a node in a bst is that when we remove the node, we must re-
* structure the tree to maintain its balance.
* In the first scenario, because we are already at the bottom of the tree, we simply remove
* the node and its pointer from the parent. Done.
* In the second scenario, because the node we need to remove has a child
* therefore, when we remove it, we must make sure we don't lose the child.
* That means we must point the to-be-removed node's parent to the child after the removal.
* In the third scenario, which is the most complex, we must perform 4 steps. 
* Step One = Find the smallest node in the right subtree of the to-be-removed node. 
* This is because when we remove the current node, we must maintain the entire tree's strcuture.
* To do that, we need to find a value that's larger that the left child of the to-be-removed node,
* but also smaller than the right node of the to-be-removed node so the tree can have a balanced
* structure.
* This means, we need to travel down the right side subtree to find the smallest node, which is definitely
* smaller than the right child of the to-be-removed node, and definitely bigger than the left child.
* Step Two = Instead of moving everything around, we simply update the to-be-removed node's value to
* make it equal the smallest node in the right subtree.
* Step Three = Then we remove the smallest node in the right subtree.
* Step Four = return the updated node reference to its parent. (we do this for every node)
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

/**
* NOW WE BEGIN IMPLEMENTATION FOR REMOVING A NODE WITH A GIVEN KEY!
**/

BinarySearchTree.prototype.removeNode = function(node, key){
    let self = this;
    if (!node){
        return null;
    }
    
    if (key < node.key){
        node.left = self.removeNode(node.left, key);
        return node;
    }else if (key > node.key){
        node.right = self.removeNode(node.right, key);
        return node;
    }else {
        if (!node.left && !node.right){
            node = null;
            return node;
        }else if (!node.left && node.right){
            node = node.right;
            return node;
        }else if (node.left && !node.right){
            node = node.left;
            return node;
        }else {
            let minNode = findMinNode(node.right);
            node.key = minNode.key;
            node.right = self.removeNode(node.right, minNode.key);
            return node;
        }
    }
}

function findMinNode(node){
    while(node && node.left !== null){
        node = node.left;
    }
    return node;
}


// Let's test it
let bst = new BinarySearchTree();
let nodes = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];
for (let i = 0; i < nodes.length; i++){
    bst.push(nodes[i]);
}

bst.removeNode(bst.root, 15)
console.log(bst.root.right);