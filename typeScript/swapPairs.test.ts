import swapPairs from "./swapPairs";
import {ListNode} from "./swapPairs";

describe('長さ2のリストを受け取ったときに2つの要素が入れ替わったリストを返すこと', () => {
    it('[1, 2]を受け取ったとき[2, 1]を返すこと', () => {
        expect(swapPairs(new ListNode(2, new ListNode(1))))
            .toEqual(new ListNode(1, new ListNode(2)));
    })

    it('[3, 4]を受け取ったとき[4, 3]を返すこと', () => {
        expect(swapPairs(new ListNode(3, new ListNode(4))))
            .toEqual(new ListNode(4, new ListNode(3)));
    })
})

it('空のリストを受け取ったときに空のリストを返すこと', () => {
    expect(swapPairs(null)).toEqual(null);
})

describe('長さ3のリストを受け取ったときに先頭2つの要素が入れ替わったリストを返すこと', () => {
    it('[1, 2, 3]を受け取ったとき[2, 1, 3]を返すこと', () => {
        expect(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3)))))
            .toEqual(new ListNode(2, new ListNode(1, new ListNode(3))));
    })

    it('[3, 4, 5]を受け取ったとき[4, 3, 5]を返すこと', () => {
        expect(swapPairs(new ListNode(3, new ListNode(4, new ListNode(5)))))
            .toEqual(new ListNode(4, new ListNode(3, new ListNode(5))));
    })
})

describe('長さ1のリストを受け取ったときにそのリストを返すこと', () => {
    it('[1]を受け取ったとき[1]を返すこと', () => {
        expect(swapPairs(new ListNode(1)))
            .toEqual(new ListNode(1));
    })

    it('[2]を受け取ったとき[2]を返すこと', () => {
        expect(swapPairs(new ListNode(2)))
            .toEqual(new ListNode(2));
    })
})

describe('長さ4以上のリストを受け取ったときに先頭2つの要素が入れ替わったリストを返すこと', () => {
    it('[1, 2, 3, 4]を受け取ったとき[2, 1, 4, 3]を返すこと', () => {
        expect(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))))
            .toEqual(new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))));
    })

    it('[3, 4, 5, 6]を受け取ったとき[3, 4, 5, 6]を返すこと', () => {
        expect(swapPairs(new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
            .toEqual(new ListNode(4, new ListNode(3, new ListNode(6, new ListNode(5)))));
    })
})