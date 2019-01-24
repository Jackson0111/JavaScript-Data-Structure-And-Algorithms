/**
 * Design your implementation of the circular queue. 
 * The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle,
 * and the last position is connected back to the first position to make a circle. 
 * It is also called "Ring Buffer".
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. 
 * In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. 
 * But using the circular queue, we can use the space to store new values.
 **/

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = [];
    this.fullSize = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    else{
        this.queue.push(value);
        return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.queue.length === 0) return false;
    else{
        this.queue.shift();
        return true;
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.queue.length === 0) return -1;
    else return this.queue[0];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.queue.length === 0) return -1;
    else {
        return this.queue[this.queue.length - 1];
    }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0 ? true : false;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.fullSize ? true : false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */