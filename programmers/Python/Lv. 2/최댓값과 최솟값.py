def solution(s):
    arr = list(map(int, s.split()))
    a = min(arr)
    b = max(arr)
    return str(a)+" "+str(b)

answer = solution("1 2 3 4")
print(answer)
