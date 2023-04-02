function solution(arr) {
  let sum = arr.reduce((total, val) => total + val);
  return sum / arr.length;
}
