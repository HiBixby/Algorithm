const solution = (absolutes, signs) =>
  absolutes.reduce((prev, curr, idx) => prev + (signs[idx] ? curr : -curr), 0);
