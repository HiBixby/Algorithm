import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> hq = new PriorityQueue<>();
        int answer = 0;
        for (int s : scoville) {
            hq.add(s);
        }
        while (hq.peek() < K) {
            if (hq.size() < 2) {
                return -1;
            }
            int a = hq.poll();
            int b = hq.poll();
            int newFood = a + b * 2;
            hq.add(newFood);
            answer++;
        }
        return answer;
    }
}