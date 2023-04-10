function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => false);
  let queue = [];
  function bfs(number) {
    if (visited[number]) {
      return;
    }
    answer++;
    visited[number] = true;
    queue.push(number);
    while (queue.length) {
      node = queue.shift();
      visited[node] = true;
      for (let i = 0; i < n; i++) {
        if (computers[node][i] && !visited[i]) {
          queue.push(i);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    bfs(i);
  }
  return answer;
}
//bfs 풀이

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); //3
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); //2
