const rotate = (s) => {
  s.push(s.shift());
  return s;
};
const isCorrect = (s) => {
  let bracket = { "}": "{", ")": "(", "]": "[" };
  let stack = [];
  s.forEach((e) => {
    console.log(stack);
    let l = stack[stack.length - 1];
    if (e in bracket && stack[stack.length - 1] === bracket[e]) {
      if (stack.length === 0) return false;
      stack.pop();
    } else {
      stack.push(e);
    }
  });
  return stack.length === 0;
};
function solution(s) {
  s = [...s];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    answer += isCorrect(s) ? 1 : 0;
    s = rotate(s);
  }
  return answer;
}

console.log(solution("}}}"));
