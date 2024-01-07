function solution(want, number, discount) {
    let answer = 0;
    let dic={};
    want.forEach((v,i)=>dic[v] = number[i]);
    let copyDic = {...dic};
    for(let i = 10; i<discount.length+1;i++){
        let flag = discount.slice(i-10,i).some(v=>{
            if(dic[v]&&dic[v]>0){
                dic[v]--;
                return false;
            }
            return true;
        });
        if(!flag){
           answer++; 
        }
        dic = {...copyDic};
    }
    return answer;
}
//배열을 10씩 잘라서 돌려도 시간복잡도가 크게 증가하지 않기 때문에 통과할 수 있었다.