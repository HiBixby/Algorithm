T = int(input())
for tc in range(1, T+1):
    dx = [-1, -1, -1, 0, 1, 1, 1, 0]
    dy = [-1, 0, 1, 1, 1, 0, -1, -1]
    stack = [(1, 1), (1, 4), (1, 7), (4, 1), (4, 4),
             (4, 7), (7, 1), (7, 4), (7, 7)]
    # 입력 받기
    stoku = []
    answer = 1
    for _ in range(9):
        stoku.append(list(map(int, input().split())))
    for i in range(9):
        row = stoku[i]
        col = []
        for j in range(9):
            col.append(stoku[j][i])
        if len(set(row)) < 9 or len(set(col)) < 9:
            answer = 0
            break
    for i in range(9):
        square = set()
        x, y = stack.pop()
        square.add(stoku[x][y])
        for j in range(8):
            nx = x+dx[j]
            ny = y+dy[j]
            square.add(stoku[nx][ny])
        if len(square) < 9:
            answer = 0
            break
    print("#"+str(tc)+" "+str(answer))
