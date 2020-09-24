package arrays;

import java.util.Scanner;

public class FirstIndexAndLastIndex {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < length; i++) {
            arr[i] = sc.nextInt();
        }
        int d = sc.nextInt();
        printFirstIndexAndLastIndex(arr, length, d);
        sc.close();
    }

    private static void printFirstIndexAndLastIndex(int[] arr, int length, int d) {
        int firstIndex = -1;
        int lastIndex = -1;
        for (int i = 0; i < length; i++) {
            if (firstIndex == -1 && arr[i] == d) {
                firstIndex = i;
                lastIndex = i;
            } else if (arr[i] == d) {
                lastIndex = i;
            }
        }
        System.out.println(firstIndex);
        System.out.println(lastIndex);
    }
}
