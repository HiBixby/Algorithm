function solution(n) {
  let numberOfOne = n.toString(2).replace(/0/g, "").length;
  let m = n + 1;
  while (true) {
    if (m.toString(2).replace(/0/g, "").length === numberOfOne) return m;
    m++;
  }
}
