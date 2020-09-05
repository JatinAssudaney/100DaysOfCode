package dynamic_programming;

import java.util.Scanner;

public class CountPaths {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int paths = countPathsMemoized(N, new int[N + 1]);
        System.out.println(paths);
        paths = countPathsTabulation(N);
        System.out.println(paths);
        sc.close();
    }

    private static int countPathsTabulation(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 1;
        for (int i = 1; i < dp.length; i++) {
            if (i == 1) {
                dp[i] = dp[i - 1];
            } else if (i == 2) {
                dp[i] = dp[i - 1] + dp[i - 2];
            } else {
                dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
            }
        }
        return dp[n];
    }

    private static int countPathsMemoized(int n, int[] qb) {
        if (n == 0) {
            return 1;
        } else if (n < 0) {
            return 0;
        }
        if (qb[n] != 0) {
            return qb[n];
        }
        int cpm1 = countPathsMemoized(n - 1, qb);
        int cpm2 = countPathsMemoized(n - 2, qb);
        int cpm3 = countPathsMemoized(n - 3, qb);
        int paths = cpm1 + cpm2 + cpm3;
        qb[n] = paths;
        return paths;
    }
}
