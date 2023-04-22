function solution(n) {
  let dp = [1, 2];
  let DIV = 1234567;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] % DIV) + (dp[i - 2] % DIV);
  }
  return dp[n - 1] % DIV;
}
