function solution(board) {
  let answer = 0;
  let visited = Array.from(Array(7), () => Array(7));
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
      return;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= 7 || ny < 0 || ny >= 7) {
        continue;
      }
      if (!visited[nx][ny] && board[nx][ny] === 0) {
        visited[nx][ny] = true;
        DFS(nx, ny);
        visited[nx][ny] = false;
      }
    }
  }
  visited[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));

// DFS