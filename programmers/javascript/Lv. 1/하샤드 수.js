function solution(x) {
  let sum = (x + "")
    .split("")
    .map((e) => parseInt(e))
    .reduce((a, b) => a + b);
  return !(x % sum);
}
