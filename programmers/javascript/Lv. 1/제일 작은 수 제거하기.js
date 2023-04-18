function solution(arr) {
  const min = Math.min(...arr);
  let answer = arr.filter((e) => e !== min);
  return answer.length !== 0 ? answer : [-1];
}
