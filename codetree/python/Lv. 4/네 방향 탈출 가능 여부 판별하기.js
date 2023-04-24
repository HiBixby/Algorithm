let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map((e) => parseInt(e));
let map = input.slice(1).map((e) => e.split(" ").map((_) => parseInt(_)));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
const bfs = (a, b) => {
  let queue = [];
  queue.push([a, b]);
  while (queue.length > 0) {
    let [x, y] = queue.shift();
    if (map[x][y] === 0) continue;
    map[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (map[nx][ny] === 1) {
        queue.push([nx, ny]);
      }
    }
  }
  return map[n - 1][m - 1] === 0 ? 1 : 0;
};
console.log(bfs(0, 0));
