package recursion;

import java.util.Scanner;

public class PrintArray {
    public static void printArray(int[] arr, int idx) {
        if (idx == arr.length) {
            return;
        }
        System.out.print(arr[idx] + " ");
        printArray(arr, idx + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        printArray(arr, 0);
        sc.close();
    }
}
