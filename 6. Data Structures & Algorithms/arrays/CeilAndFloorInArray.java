package arrays;

import java.util.Scanner;

public class CeilAndFloorInArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < length; i++) {
            arr[i] = sc.nextInt();
        }
        int d = sc.nextInt();
        printCeilAndFloor(arr, length, d);
        sc.close();
    }

    private static void printCeilAndFloor(int[] arr, int length, int d) {
        int ceil = 0;
        int floor = 0;
        for (int i = 0; i < length; i++) {
            if (i + 1 < length && d > arr[i] && d < arr[i + 1]) {
                ceil = arr[i + 1];
                floor = arr[i];
            }
        }
        System.out.println(ceil);
        System.out.println(floor);
    }
}
