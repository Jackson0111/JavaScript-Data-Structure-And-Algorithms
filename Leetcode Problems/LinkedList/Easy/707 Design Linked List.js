/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  this.length = 0;
};

function Node(val){
  this.val = val;
  this.next = null;
}

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index >= 0 && index < this.length){
      let current = this.head;
      let currentIndex = 0;
      while(currentIndex < index && current){
          current = current.next;
          currentIndex++;
      }
      return currentIndex === index ? current.val : -1;
  }else{
      return -1;
  }
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val);
  if(!this.head) this.head = newNode;
  else{
      newNode.next = this.head;
      this.head = newNode;
  }
  this.length++;
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  if(this.length > 0){
      let newNode = new Node(val);
      let current = this.head;
      while(current.next){
          current = current.next;
      }
      current.next = newNode;
      newNode.next = null;
      this.length++;
  }
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) this.addAtHead(val);
  else if (index > 0 && index < this.length){
      let newNode = new Node(val);
      let current = this.head;
      let currentIndex = 0;
      while(currentIndex < index - 1){
          current = current.next;
          currentIndex++;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
  }else if (index === this.length){
      this.addAtTail(val);
  }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  // delete head
  if (index === 0){
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
      this.length--;
  }
  // delete tail
  if (index > 0 && index === this.length - 1){
      let current = this.head;
      while(current && current.next && current.next.next){
          current = current.next;
      }
      let temp = current.next;
      current.next = null;
      temp = null;
      this.length--;
  }
  // delete some node in the middle
  if (index > 0 && index < this.length - 1){
      let current = this.head;
      let currentIndex = 0;
      while(currentIndex < index - 1){
          current = current.next;
          currentIndex++;
      }
      let temp = current.next;
      current.next = temp.next;
      temp.next = null;
      temp = null;
      this.length--;
  }
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = Object.create(MyLinkedList).createNew()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/