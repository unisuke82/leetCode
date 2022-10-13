fn main() {
    let merged = merge_two_lists(Some(Box::new(ListNode::new(0))), Some(Box::new(ListNode::new(1))));
    println!("Hello, world!");
}

pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}

impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}

fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    match list1 {
        None => match list2 {
            None => None,
            Some(list2_body) => Some(list2_body)
        },
        Some(list1_body) => match list2 {
            None => Some(list1_body),
            Some(list2_body) =>
                if list1_body.val <= list2_body.val {
                    Some(
                        Box::new(ListNode{
                            val: list1_body.val,
                            next: merge_two_lists(list1_body.next, Some(list2_body))
                        }))
                } else {
                    Some(
                        Box::new(ListNode{
                            val: list2_body.val,
                            next: merge_two_lists(Some(list1_body), list2_body.next)
                        }))
                }
        }
    }
}
