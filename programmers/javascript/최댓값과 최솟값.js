solution = (s) => {
  tmp = s.split(" ").map((e) => parseInt(e));
  max = Math.max(...tmp);
  min = Math.min(...tmp);
  answer = `${min} ${max}`;
  return answer;
};
