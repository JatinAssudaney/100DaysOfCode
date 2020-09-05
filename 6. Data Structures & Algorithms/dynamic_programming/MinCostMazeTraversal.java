package dynamic_programming;

import java.util.Scanner;

public class MinCostMazeTraversal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int col = sc.nextInt();
        int[][] maze = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                maze[i][j] = sc.nextInt();
            }
        }
        int cost = minCostMazeTraversal(maze, row, col);
        System.out.println(cost);
        sc.close();
    }

    private static int minCostMazeTraversal(int[][] maze, int row, int col) {
        int[][] dp = new int[row][col];
        // Initialize DP
        dp[row - 1][col - 1] = maze[row - 1][col - 1];
        for (int i = row - 2; i >= 0; i--) {
            dp[i][col - 1] = dp[i + 1][col - 1] + maze[i][col - 1];
        }
        for (int j = col - 2; j >= 0; j--) {
            dp[row - 1][j] = dp[row - 1][j + 1] + maze[row - 1][j];
        }
        for (int i = row - 2; i >= 0; i--) {
            for (int j = col - 2; j >= 0; j--) {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + maze[i][j];
            }
        }
        return dp[0][0];
    }
}
