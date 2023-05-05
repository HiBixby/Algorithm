class Solution {

  public long solution(long n) {
    double x = Math.sqrt(n);
    return (long) Math.pow((int) x, 2) == n ? (long) Math.pow(x + 1, 2) : -1;
  }
}
