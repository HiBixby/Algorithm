function solution(operations) {
  let queue = [];
  for (let operation of operations) {
    if (operation === "D 1") {
      let max = Math.max(...queue);
      let deleted = false;
      let newQueue = [];
      for (let q in queue) {
        if (q === max) {
          if (!deleted) {
            deleted = true;
          }
        } else {
          newQueue.push(q);
        }
      }
      queue = newQueue;
    } else if (operation === "D -1") {
      let min = Math.min(...queue);
      let deleted = false;
      let newQueue = [];
      for (let q in queue) {
        if (q === min) {
          if (!deleted) {
            deleted = true;
          }
        } else {
          newQueue.push(q);
        }
      }
      queue = newQueue;
      break;
    } else {
      let number = operation.split(" ")[1];
      queue.push(parseInt(number));
    }
  }
  return queue;
}
