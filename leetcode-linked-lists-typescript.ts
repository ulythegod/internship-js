/**
 * Definition for singly-linked list.
 *  */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

let valuesArray: number[] = [1, 2, 3, 4, 5];
let list: ListNode = createList(valuesArray);
let itemForDelete: ListNode = findRoot(5, list);

//deleteNode(itemForDelete);
removeNthFromEnd(list, 2);
console.log(list);

function createList(values: number[]): ListNode {
    let currentCreatedNode: ListNode | null;

    if (values.length > 0) {
        for (let i = values.length - 1; i >= 0; i--) {
            if (i === values.length - 1) {
                currentCreatedNode = new ListNode(values[i], undefined);
            } else {
                currentCreatedNode = new ListNode(values[i], currentCreatedNode);
            }
        }
    } else {
        currentCreatedNode = new ListNode(undefined, undefined);
    }

    return currentCreatedNode;
}

function findRoot(rootValue: number, root: ListNode | null): ListNode {
    let result: ListNode | null = null;

    if (rootValue !== undefined && root) {        
        while (root.next) {          
            if (root.val == rootValue) {
                result = root;
                return result;
            }

            root = root.next;
        }
    }

    return result;
}

//Delete Node in a Linked List
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    root.val = root.next.val;
    root.next = root.next.next;    
};

//Remove Nth Node From End of List
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    for (let i = 0; i < n; i++) {
        if (fast.next === null) {
            if (i == n - 1) {
                head = head.next;
            }

            return head;
        }        
    }
    
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    if (slow.next) {
        slow.next = slow.next.next;
    }

    return head;
};
