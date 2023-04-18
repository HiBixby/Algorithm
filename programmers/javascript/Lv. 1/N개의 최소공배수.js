function solution(arr) {
  for (let i = Math.max(...arr); i <= arr.reduce((a, b) => a * b); i++) {
    if (arr.filter((e) => i % e === 0).length === arr.length) return i;
  }
}
