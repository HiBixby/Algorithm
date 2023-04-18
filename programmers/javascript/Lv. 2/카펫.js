function solution(brown, yellow) {
  for (let i = 3; i < 2500; i++) {
    for (let j = i; j < 2500; j++) {
      if (
        brown === (i - 2) * 2 + (j - 2) * 2 + 4 &&
        yellow === (i - 2) * (j - 2)
      ) {
        return [j, i];
      }
    }
  }
}
