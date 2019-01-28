/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let total = 0;
  let current = head;
  while(current){
      current = current.next;
      total++;
  }
  let middle = Math.floor(total / 2);
  let currentIndex = 0;
  current = head;
  while(currentIndex < middle){
      current = current.next;
      currentIndex++;
  }
  return current;
};