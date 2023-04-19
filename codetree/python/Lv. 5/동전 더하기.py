n, k = map(int, input().split())
coins = [int(input()) for i in range(n)]
answer = 0

coins.sort(reverse=True)
for coin in coins:
    cnt = k//coin
    k -= cnt*coin
    answer += cnt
print(answer)
