/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
* METHOD 1
* compare the length of two lists, reposition the head of the longer one to make the two lists have the same length. Then we can compare each node to find the one that has the same reference.
*/
var getIntersectionNode = function(headA, headB) {
    var curr1 = headA;
    var curr2 = headB;
    var length1 = 0;
    var length2 = 0;
    while(curr1 != null){
        length1++;
        curr1 = curr1.next;
    }
    while(curr2 != null){
        length2++;
        curr2 = curr2.next;
    }
    if(length1 > length2){
        var newHead = reposition(headA, length1 - length2);
        return compare(newHead, headB);
    }else {
        var newHead = reposition(headB, length2 - length1);
        return compare(headA, newHead);
    }
    
};

function reposition(head, difference){
    if(difference == 0) return head;
    while(difference != 0){
        head = head.next;
        difference--;
    }
    return head;
}

function compare(head1, head2){
    while(head1 != null && head2 != null && head1 != head2){
        head1 = head1.next;
        head2 = head2.next;
    }
    return head1 != null && head2 != null ? head1 : null;
}

/**
* METHOD 2
* Let's have two pointers that travel both lists. Let pointer a start from headA and pointer b start from headB, when either one reaches the end, let it jump to the beginning of the other list.
* Keep this path and let two pointers continue to travel. They will 100% meet eventually.
* There will be two points they can meet, or be at the same relative position if you will.
* If the two lists do not have an intersection, the pointers will both be at null when they meet again.
* If the two lists do have an intersection, the pointers will meet again at the intersection.
* Why? Because they will have traveled the same distance when they meet again. Here's an example:
* List A has a1, a2, c1, c2 and c3. 
* List B has b1, b2, b3, c1, c2 and c3.
* Pointer a will travel a1, a2, c1, c2, c3, b1, b2, b3 and c1 again.
* Pointer b will travel b1, b2, b3, c1, c2, c3, a1, a2 and c1 again.
* The distance they travel is the total length of two lists. 
* Even though there are no cycles in the lists, we can use "cycle thinking" to implement this method.
* See implementation below:
*/
var getIntersectionNode = function(headA, headB) {
    var a = headA;
    var b = headB;
    while(a != b){
        a = a == null ? headB : a.next;
        b = b == null ? headA : b.next;
    }
    return a;
};