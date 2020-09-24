package two_dimensional_arrays;

import java.util.Scanner;

public class ExitPointInMatrix {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int col = sc.nextInt();
        int[][] arr = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        exitPoint(arr, row, col);
        sc.close();
    }

    private static void exitPoint(int[][] arr, int row, int col) {
        int[] dirX = { 0, 1, 0, -1 };
        int[] dirY = { 1, 0, -1, 0 };
        int i = 0;
        int j = 0;
        int direction = 0; // E=0, S=1, W=2, N=3
        while (true) {
            if (arr[i][j] == 1) {
                direction = (direction + 1) % 4;
            }
            if (isExit(arr, i, j, direction, dirX, dirY)) {
                break;
            }
            i += dirX[direction];
            j += dirY[direction];
        }
        System.out.println(i);
        System.out.println(j);

    }

    private static boolean isExit(int[][] arr, int i, int j, int direction, int[] dirX, int[] dirY) {
        int row = arr.length;
        int col = arr[0].length;
        if (arr[i][j] == 0 && i + dirX[direction] >= row || j + dirY[direction] >= col || i + dirX[direction] < 0
                || j + dirY[direction] < 0) {
            return true;
        }
        return false;
    }
}
