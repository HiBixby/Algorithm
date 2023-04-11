function solution(s) {
  let answer = "";
  let cnt = 1;
  let prev = s[0];
  for (let c of s.slice(1) + " ") {
    if (c === prev) {
      cnt++;
    } else {
      answer += prev;
      answer += cnt > 1 ? cnt : "";
      cnt = 1;
      prev = c;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
