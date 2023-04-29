import java.util.*;

class 최댓값과최솟값 {
    public static void main(String[] args) {
        최댓값과최솟값 T = new 최댓값과최솟값();
        String answer = T.solution("1 2 3 4");
        System.out.println(answer);
    }

    public String solution(String s) {
        String[] strNums = s.split(" ");
        int min = Arrays.stream(strNums).mapToInt(Integer::parseInt).min().getAsInt();
        int max = Arrays.stream(strNums).mapToInt(Integer::parseInt).max().getAsInt();
        return min + " " + max;
    }
}