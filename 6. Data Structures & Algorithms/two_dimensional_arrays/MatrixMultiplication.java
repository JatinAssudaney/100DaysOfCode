package two_dimensional_arrays;

import java.util.Scanner;

public class MatrixMultiplication {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int row1 = sc.nextInt();
        int col1 = sc.nextInt();
        int[][] arr1 = new int[row1][col1];
        for (int i = 0; i < row1; i++) {
            for (int j = 0; j < col1; j++) {
                arr1[i][j] = sc.nextInt();
            }
        }
        int row2 = sc.nextInt();
        int col2 = sc.nextInt();
        int[][] arr2 = new int[row2][col2];
        for (int i = 0; i < row2; i++) {
            for (int j = 0; j < col2; j++) {
                arr2[i][j] = sc.nextInt();
            }
        }
        sc.close();
        if (col1 != row2) {
            System.out.println("Invalid input");
            return;
        }
        int[][] multliplied = matrixMultiplication(arr1, row1, col1, arr2, row2, col2);
        display(multliplied, row1, col2);

    }

    private static int[][] matrixMultiplication(int[][] arr1, int row1, int col1, int[][] arr2, int row2, int col2) {
        int[][] mult = new int[row1][col2];
        for (int i = 0; i < row1; i++) {
            for (int j = 0; j < col2; j++) {
                for (int k = 0; k < row2; k++)
                    mult[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
        return mult;
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
