package two_dimensional_arrays;

import java.util.Scanner;

public class WaveTraversal {
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
        int[][] wave = waveTraversal(arr, row, col);
        display(wave, col, row);
        sc.close();
    }

    private static int[][] waveTraversal(int[][] arr, int row, int col) {
        int[][] wave = new int[col][row];

        for (int j = 0; j < col; j++) {
            int k = 0;
            if (j % 2 == 0) {
                for (int i = 0; i < arr.length; i++) {
                    wave[j][k] = arr[i][j];
                    k++;
                }
            } else {
                for (int i = row - 1; i >= 0; i--) {
                    wave[j][k] = arr[i][j];
                    k++;
                }
            }

        }
        return wave;
    }

    private static void display(int[][] arr, int row, int col) {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(arr[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
