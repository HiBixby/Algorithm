function solution(x) {
  let answer = [0, 0];
  while (x !== "1") {
    let c = x.replace(/0/g, "").length;
    answer[0]++;
    answer[1] += x.length - c;
    x = c.toString(2);
  }
  return answer;
}
