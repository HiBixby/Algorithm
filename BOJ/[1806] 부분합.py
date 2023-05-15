n, m = map(int, input().split())
arr = list(map(int, input().split()))
left = 0
right = 0
summ = 0
answer = 0
while left < n:
    if summ < m:
        if right >= n:
            break
        summ += arr[right]
        right += 1
    else:
        length = right - left
        answer = length if answer == 0 else min(answer, length)
        summ -= arr[left]
        left += 1
print(answer)
