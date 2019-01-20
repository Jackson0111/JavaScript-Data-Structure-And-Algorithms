    /**
    * METHOD 1:
    * Use a dummy node to start a new list. Compare each node from two given linked lists. 
    * Because the length of the two lists could be different, once one list reaches the end, we simply append the rest of the other list to the newly created list because the numbers in both lists are         *already sorted. 
    * When it's done, we return dummy.next as the head.
    */
var mergeTwoLists = function(l1, l2) {
    var repHead = new ListNode(-1);
    var curr = repHead;
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
           curr.next = l1;
             l1 = l1.next;
         }else {
             curr.next = l2;
             l2 = l2.next;
         }
         curr = curr.next;
     }
     curr.next = l1 == null ? l2 : l1;
     return repHead.next;
};

    /**
    * METHOD 2:
    * Use recursion
    * I DON'T QUITE UNDERSTAND THIS SOLUTION YET, NEED TO LOOK INTO IT MORE.
    */
var mergeTwoLists = function(l1, l2) {
    return recursion(l1, l2);
};

function recursion(l1, l2){
        if(l1 == null) return l2;
    if(l2 == null) return l1;
    if(l1.val < l2.val){
        l1.next = recursion(l1.next, l2);
        return l1;
    }else {
        l2.next = recursion(l1, l2.next);
        return l2;
    }
}