function solution(priorities, location) {
  let answer = 0;
  while (priorities.length) {
    let p = priorities.shift();
    location--;
    if (p < Math.max(...priorities)) {
      priorities.push(p);
      if (location === -1) {
        location = priorities.length - 1;
      }
    } else {
      answer++;
      if (location === -1) {
        return answer;
      }
    }
  }
}
