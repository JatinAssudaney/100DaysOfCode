package two_dimensional_arrays;

import java.util.Scanner;

public class SaddlePoint {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[][] arr = new int[length][length];
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        int saddle = saddlePoint(arr, length);
        if (saddle == -1) {
            System.out.println("Invalid input");
        } else {
            System.out.println(saddle);
        }
        sc.close();
    }

    private static int saddlePoint(int[][] arr, int length) {
        int saddle = -1;
        for (int i = 0; i < length; i++) {
            int leastColumn = 0;
            for (int j = 0; j < length; j++) {
                if (arr[i][j] < arr[i][leastColumn]) {
                    leastColumn = j;
                }
            }
            boolean flag = true;
            for (int k = 0; k < arr.length; k++) {
                if (arr[k][leastColumn] > arr[i][leastColumn]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                saddle = arr[i][leastColumn];
            }
        }
        return saddle;
    }
}
