package dynamic_programming;

import java.util.Scanner;

public class Goldmine {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int col = sc.nextInt();
        int[][] mine = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                mine[i][j] = sc.nextInt();
            }
        }
        int gold = goldmine(mine, row, col);
        System.out.println(gold);
        sc.close();
    }

    private static int goldmine(int[][] mine, int row, int col) {
        int[][] dp = new int[row][col];
        for (int i = 0; i < row; i++) {
            dp[i][col - 1] = mine[i][col - 1];
        }
        for (int j = col - 2; j >= 0; j--) {
            for (int i = 0; i < row; i++) {
                if (i == 0) {
                    int next = dp[i][j + 1];
                    int nextDown = dp[i + 1][j + 1];
                    dp[i][j] = Math.max(next, nextDown);
                } else if (i == row - 1) {
                    int nextUp = dp[i - 1][j + 1];
                    int next = dp[i][j + 1];
                    dp[i][j] = Math.max(next, nextUp);

                } else {
                    int nextUp = dp[i - 1][j + 1];
                    int next = dp[i][j + 1];
                    int nextDown = dp[i + 1][j + 1];
                    dp[i][j] = Math.max(Math.max(nextUp, next), nextDown);
                }
                dp[i][j] += mine[i][j];
            }
        }
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < row; i++) {
            max = Math.max(max, dp[i][0]);
        }
        return max;
    }
}
