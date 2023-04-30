function solution(s) {
    let answer = [];
    let t = s.replace(/{/ig, "[").replace(/}/ig, "]");
    t = eval(t);
    t.sort((a, b) => a.length - b.length);
    t.forEach(e => {
        let a = new Set(answer);
        let b = new Set(e);
        for (let x of b) {
            if (a.has(x)) continue;
            answer.push(x);
            a.add(x);
        }
    });
    return answer;
}