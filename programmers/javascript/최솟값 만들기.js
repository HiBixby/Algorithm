function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let AB = A.map((e, i) => e * B[i]);
  let answer = AB.reduce((a, c) => a + c);
  return answer;
}
