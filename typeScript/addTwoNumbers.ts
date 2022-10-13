/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 *
 * listnode = {
 *     val,
 *     head::next
 * }
 * match l1
 *  val1 => match l2
 *          val2 => if(val1 + val2 < 10) then val1 + val2 else (val1+val2)%10 :: (val1+val2)/10
 *          head1 :: next1 => if(val
 *
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

let carry = 0;

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2 && carry === 0) {
        return null;
    }
    let l1Head = l1 ? l1.val : 0;
    let l2Head = l2 ? l2.val : 0;
    let sum = l1Head + l2Head + carry;

    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    let l1Tail = l1 ? l1.next: null;
    let l2Tail = l2 ? l2.next: null;

    return new ListNode(digit, addTwoNumbers(l1Tail, l2Tail));
};

console.log(addTwoNumbers(new ListNode(9), new ListNode(9)));