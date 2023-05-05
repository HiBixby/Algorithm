import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        String s = String.valueOf(n);
        for (String c : s.split("")) {
            answer += Integer.parseInt(c);
        }
        return answer;
    }
}