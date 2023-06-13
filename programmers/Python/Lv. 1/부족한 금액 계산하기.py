def solution(price, money, count):
    total = 0
    for p in range(price, price*count+1, price):
        total += p
    answer = max((total-money), 0)
    return answer
