/**
 * In this file, we will implement the linked list data structrue
 */

 function LinkedList(){
     this.head = null;
     this.head.next = null;
     this.length = 0;
 }

 function Node(element){
    this.element = element;
    this.element.next = null;
 }

 // below we will implement some Linked List functions
 LinkedList.prototype.append = function(node){
     // There are two cases to append an element.
     // If the list is empty, we will append the element as head.
     // If the list is not empty, we will append the element to the end of the list.
     if (this.head === null) this.head = node;
     else{
         let current = this.head;
         while(current){
             current = current.next;
         }
         current.next = node;
         this.length++;
     }
 }

 // The removeAt function will return the node if removed successfully, or null if it failed.
 LinkedList.prototype.removeAt = function(position){
    // When we remove a node, we need to update the pointers to maintain the Linked List structure.
    // First, we need to check if the position if valid.
    if (position >= 0 && position < this.length){
        // Now, we find the correct position to remove, and update the previous node's pointer to the node after the removed one.
        let current = this.head;
        let prev = null;
        let currentIndex = 0;
        while(currentIndex < position){
            prev = current;
            current = current.next;
            currentIndex++;
        }
        // After the while loop, the correct position has been found, now we remove the node and update the pointers.
        prev.next = current.next;
        this.length--;
        return current;
    }else {
        return null;
    }
 }

 // The insert function will insert a node at any given position. It will return the true or false.
 LinkedList.prototype.insert = function(position, node){
    // First check if the position is valid.
    if (position >= 0 && position < this.length){
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
        while(currentIndex < position){
            prev = current;
            current = current.next;
            currentIndex++;
        }
        prev.next = node;
        node.next = current;
        this.length++;
        return true;
    }else{
        return false;
    }
 }

 // This function will return a string of the list.
 LinkedList.prototype.toString = function(){
    if (this.length === 0) return '';
    else{
        let current = this.head;
        let string = '';
        while(current){
            current = current.next;
            string += current.element;
        }
        return string;
    }
 }

 // This function will return the node at a specific position.
 LinkedList.prototype.indexOf = function(index){
     // Check if the index is valid
     if (index >= 0 && index < this.length){
        let currentIndex = 0;
        let current = this.head;
        while(currentIndex < index){
            current = current.next;
        }
        return current;
     }else {
         return null;
     }
 }

 // Returns true if the list is empty, false if it isn't.
 LinkedList.prototype.isEmpty = function(){
    return this.length === 0;
 }

 // Return the size of the list
 LinkedList.prototype.size = function(){
     return this.length;
 }