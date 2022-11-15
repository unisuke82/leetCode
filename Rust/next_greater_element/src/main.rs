fn main() {
    next_greater_element(vec![4, 1, 2], vec![1, 3, 4, 2]);
}

fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();

    let mut index1 = 0;
    while index1 < nums1.len() {
        let mut index2 = 0;

        while index2 < nums2.len() {
            if nums1[index1] == nums2[index2] {
                break;
            }
            index2 += 1;
        }

        while index2 < nums2.len() {
            if nums1[index1] < nums2[index2] {
                result.push(nums2[index2]);
                break;
            }
            index2 += 1;
        }

        if result.len() != index1 + 1 {
            result.push(-1);
        }

        index1 += 1;
    }

    println!("{:?}", result);
    result
}
