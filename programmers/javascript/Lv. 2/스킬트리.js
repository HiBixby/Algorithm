function solution(skill, skill_trees) {
  let answer = 0;
  let skillSet = new Set(skill);
  skill_trees.forEach((e) => {
    let skillTree = Array.from(e)
      .filter((e) => skillSet.has(e))
      .join("");
    if (skill.match(`^${skillTree}`)) {
      answer++;
    }
  });
  return answer;
}
