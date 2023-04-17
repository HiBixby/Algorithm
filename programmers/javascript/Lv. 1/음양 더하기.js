const solution = (absolutes, signs) =>
  absolutes.map((n, i) => (signs[i] ? n : -n)).reduce((a, b) => a + b);
