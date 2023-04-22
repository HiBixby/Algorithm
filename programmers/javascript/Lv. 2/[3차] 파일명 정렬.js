function solution(files) {
  let compare = (a, b) => {
    let headOfA = a.match(/^\D+/)[0].toLowerCase();
    let headOfB = b.match(/^\D+/)[0].toLowerCase();
    let numberOfA = parseInt(a.match(/\d+/)[0]);
    let numberOfB = parseInt(b.match(/\d+/)[0]);
    if (headOfA === headOfB) return numberOfA - numberOfB;
    else if (headOfA < headOfB) return -1;
    else return 1;
  };
  files.sort(compare);
  return files;
}
