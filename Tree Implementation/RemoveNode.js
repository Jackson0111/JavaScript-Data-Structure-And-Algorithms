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
    // If the node doesn't exist, we simply return null.
    if (!node){
        return null;
    }
    /** 
    * In the if...if else...else statement below, we check for the direction to travel
    * If the given key is smaller than the current node's key, we go to left
    * If the given key is greater than the current node's key, we go to right
    * If the given key is equal to the current node's key, we know we found the to-be-removed node
    * We use recursion to traverse the tree, every function call will return a node.
    * We need to assign that node to its new parent. 
    * For example, if we are removing a node with two children, we need to travel back eventually 
    * and return that node reference to its parent and re-create the pointer.
    * This is why we have something like node.left = self.removeNode(node.left, key); 
    * The function call will return a node. Once we get that node, we assign node.left = that node.
    * When we do that, on the call back to the parent call, we still need to remember to return
    * the current node! That's why we have return node after the node.left = ... call.
    * For every node, when the recursive call goes back, we need to return its current node to the
    * parent.
    **/
    if (key < node.key){
        node.left = self.removeNode(node.left, key);
        return node;
    }else if (key > node.key){
        node.right = self.removeNode(node.right, key);
        return node;
    }else {
        /** 
        * The first statement if to handle the first case - removing a leaf node, aka
        * a node that doesn't have children.
        * Simply set that node to null, and return that node (which will be null now) to its
        * parent so that we can assign the pointer. The parent will now point to null because
        * that node has been removed.
        **/
        if (!node.left && !node.right){
            node = null;
            return node;
        }else if (!node.left && node.right){
            /**
            * This statement and the else if statement below handles the second case:
            * aka, when a node has only one child.
            * For example, if the left node is null and the right node exists, we set 
            * node = node.right
            * Then we return the node to its new parent. 
            * Use the tree we created in this file for instance:
            * If we are removing the node with the value of 5, we will call it node_5.
            * node_5 has a parent node_7 and a left child node_3.
            * To remove node_5, we set node_5 = node_5.left, which means node_5 = node_3
            * node_5 is now gone, we return node_3 to node_7.
            * You see, we removed a node and basically ask its parent to point to the grandchild. 
            **/
            node = node.right;
            return node;
        }else if (node.left && !node.right){
            node = node.left;
            return node;
        }else {
            /**
            * This is the last case, which is when the node has two children.
            * This one is a little tricky. We must remove the node in a way that doesn't affect 
            * the balance of the tree after the removal. 
            * Refer to the comment on the top.
            **/
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