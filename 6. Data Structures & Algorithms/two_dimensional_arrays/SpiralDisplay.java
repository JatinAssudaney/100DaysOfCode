package two_dimensional_arrays;

import java.util.Scanner;

public class SpiralDisplay {
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
        spiralTraversal(arr, row, col);
        sc.close();
    }

    private static void spiralTraversal(int[][] arr, int row, int col) {
        int i = 0;
        int j = 0;
        int elements = row * col;
        int count = 0;
        while (i < row && j < col) {
            // Left Wall
            for (int k = 0; k < row && count < elements; k++) {
                System.out.println(arr[k][j]);
                count++;
            }
            j++;

            // Bottom Wall
            for (int k = j; k < col && count < elements; k++) {
                System.out.println(arr[row - 1][k]);
                count++;
            }
            row--;
            // Right Wall
            for (int k = row - 1; k >= i && count < elements; k--) {
                System.out.println(arr[k][col - 1]);
                count++;
            }
            col--;
            // Top Wall
            for (int k = col - 1; k >= j && count < elements; k--) {
                System.out.println(arr[i][k]);
                count++;
            }
            i++;
        }
    }
}