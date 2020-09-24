package two_dimensional_arrays;

import java.util.Scanner;

public class DiagonalTraversal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[][] arr = new int[length][length];
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        diagonalTraversal(arr, length);
        sc.close();
    }

    private static void diagonalTraversal(int[][] arr, int length) {
        for (int gap = 0; gap < length; gap++) {
            for (int i = 0, j = gap; j < length; i++, j++) {
                System.out.print(arr[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
