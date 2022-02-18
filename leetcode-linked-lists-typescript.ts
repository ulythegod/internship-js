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

let valuesArray: number[] = [1,2];
let valuesArray2: number[] = [1,2];
let list: ListNode | null = createList(valuesArray);
let list2: ListNode | null = createList(valuesArray2);
let itemForDelete: ListNode | null = findRoot(5, list);

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


function createList(values: number[]): ListNode | null {
    let currentCreatedNode: ListNode | null = null;

    if (values.length > 0) {
        for (let i = values.length - 1; i >= 0; i--) {
            if (i === values.length - 1) {
                currentCreatedNode = new ListNode(values[i], undefined);
            } else {
                currentCreatedNode = new ListNode(values[i], currentCreatedNode);
            }
        }
    }

    return currentCreatedNode;
}

function findRoot(rootValue: number, root: ListNode | null): ListNode | null {
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
    if (head === null) {
        return null;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;    

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

    let temp: ListNode | null = fast.next;
    if (temp !== null) {
        fast.next = temp.next;
    }      

    temp = null;    

    return head;
};

function reverseList(head: ListNode | null): ListNode | null {
    if (head !== null) {
        let listVals: number[] = [];
        let listForVals: ListNode | null = head;
        let listForReverse: ListNode | null = head;

        while (listForVals) {
            listVals.push(listForVals.val);
            listForVals = listForVals.next;
        }

        listVals.reverse();

        let i: number = 0;
        while (listForReverse) {
            listForReverse.val = listVals[i];
            i++;
            listForReverse = listForReverse.next;
        }        
    }    

    return head;
};

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result: ListNode | null = null;

    let listVals: number[] = [];

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
};

function isPalindrome1(head: ListNode | null): boolean {
    let result: boolean = false;
    let arrVals: number[] = [];

    while (head) {
        arrVals.push(head.val);
        head = head.next;
    }

    if (arrVals.join("") === arrVals.reverse().join("")) {
        result = true;
    }

    return result;
};

function hasCycle(head: ListNode | null): boolean {
    let set: any = new Set();
    let result: boolean = false;

    while (head) {
        if (set.has(head)) {
            result = true;
            return result;
        } else {
            set.add(head);
            head = head.next;  
        }        
    }

    return result;
};
