const solution = (arr) => arr.length >= 11 ? arr.reduce((a, b) => a + b) : arr.reduce((a, b) => a * b);