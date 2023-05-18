for T in range(1, int(input())+1):
    n = int(input())
    arr = list(map(int, input().split()))
    cnt = 0
    number = -1
    d = {}
    for e in arr:
        d[e] = d.get(e, 0)+1
        if d[e] > cnt:
            cnt = d[e]
            number = e
        elif d[e] == cnt and number < e:
            number = e
    print("#"+str(n), end=" ")
    print(number)
