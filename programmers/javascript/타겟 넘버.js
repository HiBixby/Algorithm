function solution(numbers, target) {
  let sum = 0;
  let answer = 0;
  function dfs(i, sign) {
    if (i === numbers.length - 1) {
      if (sum === target) {
        answer++;
      }
    } else {
      //+
      sum += numbers[i + 1];
      dfs(i + 1, "+");
      sum -= numbers[i + 1];
      //-
      sum -= numbers[i + 1];
      dfs(i + 1, "-");
      sum += numbers[i + 1];
    }
  }
  //+
  sum = numbers[0];
  dfs(0, "+");
  //-
  sum = -numbers[0];
  dfs(0, "-");
  return answer;
}
