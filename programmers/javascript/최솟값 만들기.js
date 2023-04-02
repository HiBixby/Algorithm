function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((prev, curr, i) => prev + curr * B[i], 0);
}
