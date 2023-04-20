function solution(k, tangerine) {
  let tangerineDict = {};
  let box = 0;
  let answer = 0;
  tangerine.forEach((t) => {
    tangerineDict[t] = (tangerineDict[t] | 0) + 1;
  });
  let sorted = Object.values(tangerineDict).sort((a, b) => b - a);
  for (let t of sorted) {
    answer++;
    box += t;
    if (box >= k) break;
  }
  return answer;
}
