function solution(n)
{
    return [...n.toString()].reduce((total,value)=>total+parseInt(value),0);
}