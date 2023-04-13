function solution(n) {
  let sum = 0;
  let answer = 0;
  let left = 1;
  for (let right = 1; right <= n; right++) {
    sum += right;
    if (sum === n) answer++;
    if (sum > n) {
      while (sum > n) {
        sum -= left;
        left++;
        if (sum === n) answer++;
      }
    }
  }
  return answer;
}
