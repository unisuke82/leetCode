class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
       this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function appendList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) return null
    if (l1 && !l2) return l1
    if (!l1 && l2) return l2
    if (l1 && l2) {
        if (l1.next) {
            return new ListNode(l1.val, appendList(l1.next, l2))
        } else {
            return new ListNode(l1.val, l2)
        }
    }

    return null;
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    return appendList(reverseList(head.next), new ListNode(head.val));
};

console.log(appendList(new ListNode(2, new ListNode(4)), new ListNode(3)))
console.log(reverseList(new ListNode(3, new ListNode(9, new ListNode(4)))))