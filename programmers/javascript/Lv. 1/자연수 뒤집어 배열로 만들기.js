function solution(n) {
  return Array.from(n.toString())
    .map((e) => parseInt(e))
    .reverse();
}
