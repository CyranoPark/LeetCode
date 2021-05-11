/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let rest = 0;
    let newNode = null;
    let currentNode = newNode;
    
    const addNewNode = (target) => {
        if (!newNode) {
            newNode = target;    
            return;
        }
        
        let node = newNode;
        
        while (node.next) {
            node = node.next;
        }
        
        node.next = target;
    };
    
    const searchNodes = (node1, node2) => {
        if (!node1 && !node2 && !rest) return;
        
        const sum = (node1?.val || 0) + (node2?.val || 0) + rest;

        if (sum < 10) {
            rest = 0;
            addNewNode(new ListNode(sum))
        } else {
            rest = 1;
            addNewNode(new ListNode(sum - 10))
        }
        
        searchNodes(node1?.next, node2?.next)
    };
                    
    searchNodes(l1, l2);
        
    return newNode;
    
};