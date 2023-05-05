import java.util.*;

class Solution {

  public int[] solution(long n) {
    String number = String.valueOf(n);
    int[] arr = Arrays
      .stream(number.split(""))
      .mapToInt(Integer::parseInt)
      .toArray();
    int[] answer = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
      answer[i] = arr[arr.length - i - 1];
    }
    return answer;
  }
}
