for T in range(1, int(input()) + 1):
    a, b = map(int, input().split())
    answer = (a + b) % 24
    print("#" + str(T), end=" ")
    print(answer)
