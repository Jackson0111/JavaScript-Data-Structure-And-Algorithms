function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function DoublyNode(element){
    this.element = element;
    this.next = null;
    this.prev = null;
}

DoublyLinkedList.prototype.insert = function(position, node){
    // Check if the position is valid
    if (position >= 0 && position <= this.length){
        // If we insert at the head position, make the new node the head and update the pointers.
        if (position === 0){
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        // If we insert at the tail position, make the new node the tail and update the positions.
        }else if (position === this.length){
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        // If we insert anywhere between the head and tail, traverse the list and find the position to add the new node and update the pointers.
        }else {
            let current = this.head;
            let currentIndex = 0;
            while(currentIndex < position){
                current = current.next;
            }
            current.prev.next = node;
            node.prev = current.prev;
            node.next = current;
            current.prev = node;
        }
        // Finally, we update the length property.
        this.length++;
        return true;
    }else {
        return false;
    }
}

// Returns true or false
DoublyLinkedList.prototype.removeAt = function(position){
    // Check if the position is valid
    if (position >= 0 && position < this.length){
        // There are two cases before we can remove anything.
        // If the list is empty, we need to return false as there is nothing to remove.
        if (this.length === 0) return false;
        // If the list is not empty, then we can go on and find out which node to remove.
        else{
            // If the position is the head
            if (position === 0){
                this.head = this.head.next;
                this.head.prev = null;
            // If the position is the tail
            }else if (position === this.length - 1){
                this.tail.prev = this.tail;
                this.tail.next = null;
            // If the position is between the head and tail
            }else {
                let current = this.head;
                let currentIndex = 0;
                while(currentIndex < position){
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            this.length--;
            return true;
        }
    }else {
        return false;
    }
}


