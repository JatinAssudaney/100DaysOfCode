package recursion;

import java.util.Scanner;

public class PrintArrayReverse {
    public static void printReverse(int[] arr, int idx) {
        if (idx == arr.length) {
            return;
        }
        printReverse(arr, idx + 1);
        System.out.print(arr[idx] + " ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        printReverse(arr, 0);
        sc.close();
    }
}
