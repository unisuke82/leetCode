class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function sortList(head: ListNode | null): ListNode | null {

};

/*
4, 2, 1, 3
4 ++ 2, 1, 3
4 ++ 2 ++ 1, 3
2 ++ 4, 1, 3

2 ++ (4 ++


*/