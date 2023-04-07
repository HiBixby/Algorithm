function solution(n) {
    let fib = [0,1];
    for(let i = 2; i <= n; i++){
        fib.push((fib[i-2]%1234567+fib[i-1]%1234567)%1234567);
    }
    return fib[n];
}

// 나머지 연산의 성질
// (a + b) % m = ((a % m) + (b % m)) % m