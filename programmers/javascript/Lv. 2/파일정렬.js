function solution(files) {
  let compare = (a, b) => {
    let headOfA = a.match(/^[^0-9]*/)[0].toLowerCase();
    let headOfB = b.match(/^[^0-9]*/)[0].toLowerCase();
    let numberOfA = parseInt(a.slice(headOfA.length).match(/[0-9]*/)[0]);
    let numberOfB = parseInt(b.slice(headOfB.length).match(/[0-9]*/)[0]);
    if (headOfA === headOfB) {
      return numberOfA - numberOfB;
    } else if (headOfA < headOfB) {
      return -1;
    } else {
      return 1;
    }
  };
  files.sort(compare);
  return files;
}
