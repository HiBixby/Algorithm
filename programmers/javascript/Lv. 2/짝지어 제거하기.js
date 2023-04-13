function solution(s) {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    let c = s[i];
    if (stack.at(-1) === c) stack.pop();
    else stack.push(c);
  }
  return stack.length === 0 ? 1 : 0;
}
console.log(solution("baabaa"));
