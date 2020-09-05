package dynamic_programming;

import java.util.Scanner;

public class CountPathsVariableJumps {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] jumps = new int[N];
        for (int i = 0; i < N; i++) {
            jumps[i] = sc.nextInt();
        }
        int paths = countPathsVariableJumpsTabulation(jumps, N);
        System.out.println(paths);
        sc.close();
    }

    private static int countPathsVariableJumpsTabulation(int[] jumps, int n) {
        int[] dp = new int[n + 1];
        dp[n] = 1;
        for (int i = n - 1; i >= 0; i--) {
            for (int j = 1; j <= jumps[i] && i + j < dp.length; j++) {
                dp[i] += dp[i + j];
            }
        }
        return dp[0];
    }
}
