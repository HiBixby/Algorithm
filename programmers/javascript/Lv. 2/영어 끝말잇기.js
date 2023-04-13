function solution(n, words) {
  let s = new Set();
  s.add(words[0]);
  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1];
    let curr = words[i];
    if (s.has(curr) || prev.at(-1) !== curr.at(0)) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    } else s.add(curr);
  }
  return [0, 0];
}
