function solution(numbers) {
  let a = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let b = new Set(numbers);
  for (let x of a) {
    if (b.has(x)) {
      a.delete(x);
    }
  }
  let sum = Array.from(a).reduce((a, b) => a + b);
  return sum;
}
