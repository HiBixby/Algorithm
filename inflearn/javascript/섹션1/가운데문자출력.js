function solution(s) {
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) return s.substr(mid - 1, 2);
  else return s.substr(mid, 1);
}
console.log(solution("study"));
console.log(solution("summer"));
