class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    console.log(head)
    if (!head) return null;
    if (head.val === val) {
        return removeElements(head.next, val)
    }
    return new ListNode(head.val, removeElements(head.next, val))
};

console.log(removeElements(new ListNode(1, new ListNode(2)), 2))