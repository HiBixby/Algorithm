function solution(records) {
  let nickDic = {};
  let statusDic = { Enter: "들어왔습니다", Leave: "나갔습니다" };
  let answer = [];
  for (let record of records) {
    let [status, uuid, nick] = record.split(" ");
    if (status !== "Leave") nickDic[uuid] = nick;
  }
  for (let record of records) {
    let [status, uuid, nick] = record.split(" ");
    if (status !== "Change") {
      answer.push(`${nickDic[uuid]}님이 ${statusDic[status]}.`);
    }
  }
  return answer;
}
