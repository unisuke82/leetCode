fn main() {
    println!("Hello, world!");
    println!("{}", middle_node(Some(Box::new(ListNode{val: 1, next: Some(Box::new(ListNode{val: 2, next: Some(Box::new(ListNode{val: 3, next: Some(Box::new(ListNode{val: 4, next: Some(Box::new(ListNode{val: 5, next: None}))}))}))}))}))));
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

fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut count = list_count(&head);
    let mut i = 0;
    let mut head_tmp = head;
    println!("{}", count);
    while i < count / 2 {
        head_tmp = match head_tmp {
            None => None,
            Some(list) => list.next
        };
        i += 1;
    }

    head_tmp
}

fn list_count(head: &Option<Box<ListNode>>) -> u32 {
    match head {
        None => 0,
        Some(tail) => 1 + list_count(&tail.next)
    }
}