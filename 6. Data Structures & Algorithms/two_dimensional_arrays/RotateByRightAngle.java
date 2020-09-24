package two_dimensional_arrays;

import java.util.Scanner;

public class RotateByRightAngle {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[][] arr = new int[length][length];
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        int[][] rotated = rotateArray(arr, length);
        display(rotated);
        sc.close();
    }

    private static int[][] rotateArray(int[][] arr, int length) {
        int[][] rotated = new int[length][length];
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                rotated[i][j] = arr[j][i];
            }
        }
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length / 2; j++) {
                int temp = rotated[i][j];
                rotated[i][j] = rotated[i][length - j - 1];
                rotated[i][length - j - 1] = temp;
            }
        }
        return rotated;
    }

    public static void display(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
