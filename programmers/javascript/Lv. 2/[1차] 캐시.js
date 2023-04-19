function solution(cacheSize, cities) {
  let cache = Array.from({ length: cacheSize });
  let total = 0;
  for (let city of cities) {
    let x = city.toLowerCase();
    let idx = cache.indexOf(x);
    if (idx !== -1) {
      // cache hit
      for (j = idx - 1; j > -1; j--) {
        cache[j + 1] = cache[j];
      }
      cache[0] = x;
      total++;
    } else {
      // cache miss
      cache.unshift(x);
      cache.pop();
      total += 5;
    }
  }
  return total;
}
