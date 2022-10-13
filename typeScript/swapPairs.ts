export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    return new ListNode(head.next.val, new ListNode(head.val, swapPairs(head.next.next)));
};

export default swapPairs;