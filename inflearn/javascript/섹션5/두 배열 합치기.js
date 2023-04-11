function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  while (true) {
    if (p1 > arr1.length - 1) {
      return answer.concat(arr2.slice(p2));
    } else if (p2 > arr2.length - 1) {
      return answer.concat(arr1.slice(p1));
    }
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
    console.log(p1, p2);
  }
  return answer;
}
//투포인터
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
