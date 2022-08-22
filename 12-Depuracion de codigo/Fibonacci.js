function Fibonacci(num){
    if (num === 0) return [1]
    if (num === 1) return [1,1]
    let arr = [1, 1]
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}

console.log(Fibonacci())





