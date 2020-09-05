package dynamic_programming;

import java.util.Scanner;

public class ClimbWithMinMoves {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] jumps = new int[N];
        for (int i = 0; i < N; i++) {
            jumps[i] = sc.nextInt();
        }
        int count = climbMinMovesTabulation(jumps, N);
        System.out.println(count);
        sc.close();
    }

    private static int climbMinMovesTabulation(int[] jumps, int n) {
        int[] dp = new int[n + 1];
        dp[n] = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (jumps[i] == 0) {
                dp[i] = n + 1;
            } else {
                int min = n + 1;
                for (int j = 1; j <= jumps[i] && i + j < dp.length; j++) {
                    min = Math.min(min, dp[i + j]);
                }
                dp[i] = min + 1;
            }
        }
        return dp[0];
    }
}
