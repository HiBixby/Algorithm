let a = new Set([1, 2, 3]);
let b = new Set([3, 6, 5, 7, 2]);
let answer = [...a].filter((e) => b.has(e));
console.log(answer);
