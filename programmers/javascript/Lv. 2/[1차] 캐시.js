function solution(cacheSize, cities) {
  const CACHE_HIT_TIME = 1;
  const CACHE_MISS_TIME = 5;
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
      total += CACHE_HIT_TIME;
    } else {
      // cache miss
      cache.unshift(city);
      cache.pop();
      total += CACHE_MISS_TIME;
    }
  }
  return total;
}
