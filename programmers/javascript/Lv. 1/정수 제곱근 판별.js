function solution(n) {
  for (let i = 1; i <= Math.sqrt(50000000000000); i++) {
    if (n === i * i) return (i + 1) * (i + 1);
  }
  return -1;
}
