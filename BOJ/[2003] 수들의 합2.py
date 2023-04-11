n, m = map(int, input().split())
arr = list(map(int, input().split()))
left = right = answer = sum = 0
for right in range(len(arr)):
    sum += arr[right]
    if sum == m:
        answer += 1
    while sum >= m:
        sum -= arr[left]
        left += 1
        if sum == m:
            answer += 1
print(answer)
