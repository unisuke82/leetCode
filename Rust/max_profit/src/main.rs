fn main() {
    println!("{}", max_profit(vec![7, 1, 5, 3, 6, 4]))
}

fn max_profit(prices: Vec<i32>) -> i32 {
    let mut result = 0;

    for i in 0..prices.len() {
        for j in i..prices.len() {
            if prices[i] < prices[j] && result < prices[j] - prices[i] {
                result = prices[j] - prices[i];
            }
        }
    }

    result
}
