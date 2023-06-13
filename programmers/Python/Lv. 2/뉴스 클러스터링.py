def generate_multiset(arr):
    multi_set = {}
    for i in range(len(arr)-1):
        string = arr[i:i+2].upper()
        if string.isalpha():
            multi_set[string] = multi_set.get(string, 0)+1
    return multi_set


def union_set(set1, set2):
    ans = {}
    for e in set1:
        ans[e] = max(ans.get(e, 0), set1[e])
    for e in set2:
        ans[e] = max(ans.get(e, 0), set2[e])
    cnt = 0
    for e in ans:
        cnt += ans[e]
    return cnt


def intersection_set(set1, set2):
    ans = {}
    for e in set1:
        if e in set1 and e in set2:
            ans[e] = min(set1[e], set2[e])
    cnt = 0
    for e in ans:
        cnt += ans[e]
    return cnt


def solution(str1, str2):
    a = generate_multiset(str1)
    b = generate_multiset(str2)
    c = intersection_set(a, b)
    d = union_set(a, b)
    answer = 65536
    if c != d:
        answer = int(c/d*65536)
    return answer
