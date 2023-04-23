function solution(n, left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    let r = Math.floor(i / n) + 1;
    let c = (i % n) + 1;
    arr.push(Math.max(r, c));
  }
  return arr;
}
