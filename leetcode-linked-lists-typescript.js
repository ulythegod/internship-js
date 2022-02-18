/**
 * Definition for singly-linked list.
 *  */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
let valuesArray = [1, 2];
let valuesArray2 = [1, 2];
let list = createList(valuesArray);
let list2 = createList(valuesArray2);
let itemForDelete = findRoot(5, list);
//deleteNode(itemForDelete);
// list = removeNthFromEnd(list, 2);
// console.log(list);
//reverseList(list);
// let mergedLists: ListNode | null = mergeTwoLists(list, list2);
// console.log(mergedLists);
// console.log(isPalindrome1(list));
// console.log(isPalindrome1(list2));
list.next = list;
console.log(hasCycle(list));
function createList(values) {
    let currentCreatedNode = null;
    if (values.length > 0) {
        for (let i = values.length - 1; i >= 0; i--) {
            if (i === values.length - 1) {
                currentCreatedNode = new ListNode(values[i], undefined);
            }
            else {
                currentCreatedNode = new ListNode(values[i], currentCreatedNode);
            }
        }
    }
    return currentCreatedNode;
}
function findRoot(rootValue, root) {
    let result = null;
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
function deleteNode(root) {
    root.val = root.next.val;
    root.next = root.next.next;
}
;
//Remove Nth Node From End of List
function removeNthFromEnd(head, n) {
    if (head === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    for (let i = 0; i < n; i++) {
        slow = slow.next;
    }
    if (slow === null) {
        return head.next;
    }
    while (slow.next) {
        slow = slow.next;
        fast = fast.next;
    }
    let temp = fast.next;
    if (temp !== null) {
        fast.next = temp.next;
    }
    temp = null;
    return head;
}
;
function reverseList(head) {
    if (head !== null) {
        let listVals = [];
        let listForVals = head;
        let listForReverse = head;
        while (listForVals) {
            listVals.push(listForVals.val);
            listForVals = listForVals.next;
        }
        listVals.reverse();
        let i = 0;
        while (listForReverse) {
            listForReverse.val = listVals[i];
            i++;
            listForReverse = listForReverse.next;
        }
    }
    return head;
}
;
function mergeTwoLists(list1, list2) {
    let result = null;
    let listVals = [];
    while (list1) {
        listVals.push(list1.val);
        list1 = list1.next;
    }
    while (list2) {
        listVals.push(list2.val);
        list2 = list2.next;
    }
    listVals.sort((a, b) => a - b);
    result = createList(listVals);
    return result;
}
;
function isPalindrome1(head) {
    let result = false;
    let arrVals = [];
    while (head) {
        arrVals.push(head.val);
        head = head.next;
    }
    if (arrVals.join("") === arrVals.reverse().join("")) {
        result = true;
    }
    return result;
}
;
function hasCycle(head) {
    let set = new Set();
    let result = false;
    while (head) {
        if (set.has(head)) {
            result = true;
            return result;
        }
        else {
            set.add(head);
            head = head.next;
        }
    }
    return result;
}
;
