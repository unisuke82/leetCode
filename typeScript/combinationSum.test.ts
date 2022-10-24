import combinationSum from "./combinationSum";

it('[2,3,6,7], 7を受け取ったとき[[2,2,3],[7]]を返すこと', (() => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2,2,3],[7]]);
}))