def solution(elements):
    answer = set()
    n = len(elements)
    cur = 0
    for i in range(1,n+1):
        cur = sum(elements[:i])
        answer.add(cur)
        for j in range(1,n):
            cur-=elements[j-1]
            cur+=elements[(j+i-1)%n]
            answer.add(cur)
    return len(answer)