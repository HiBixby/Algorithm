function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (left <= right && left < arr.length - 1 && right < arr.length - 1)
    if (sum < m) {
      sum += arr[right];
      right++;
    } else if (sum > m) {
      sum -= arr[left];
      left++;
    } else {
      answer++;
      right++;
    }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
