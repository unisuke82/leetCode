class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function isPalindrome(head: ListNode | null): boolean {
    let headArr = [];
    let headTmp = head;

    while(headTmp !== null) {
        headArr.push(headTmp.val);
        headTmp = headTmp.next;
    }

    console.log(headArr.reverse())
    return headArr.toString() === headArr.reverse().toString()
};

console.log(isPalindrome(new ListNode(1, new ListNode(2))))