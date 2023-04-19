function solution(cacheSize, cities) {
  let cache = Array.from({ length: cacheSize });
  let total = 0;
  for (let city of cities) {
    city = city.toLowerCase();
    let idx = cache.indexOf(city);
    if (idx !== -1) {
      // cache hit
      for (j = idx - 1; j > -1; j--) {
        cache[j + 1] = cache[j];
      }
      cache[0] = city;
      total++;
    } else {
      // cache miss
      cache.unshift(city);
      cache.pop();
      total += 5;
    }
  }
  return total;
}
