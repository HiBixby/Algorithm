function solution(s) {
    answer = s.split(" ").map(word=>{
        if(word.length==0){
            return word;
        }else{
            word = word.toLowerCase();
            return word[0].toUpperCase()+word.slice(1);
        }
    }).join(" ");
    return answer;
}