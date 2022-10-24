function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    console.log(nums1.slice(0, m));
    console.log(nums2.slice(0, n));

    let nums1Slice = nums1.slice(0, m);
    let nums2Slice = nums2.slice(0, n);
    const merged: number[] = [];

    while (nums1Slice.length !== 0 && nums2Slice.length !== 0) {
        if (nums1Slice[0] <= nums2Slice[0]) {
            merged.push(nums1Slice[0]);
            nums1Slice = nums1Slice.slice(1)
        } else {
            merged.push(nums2Slice[0]);
            nums2Slice = nums2Slice.slice(1)
        }
    }

    nums1 = [...merged ,...nums1Slice ,...nums2Slice]
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)