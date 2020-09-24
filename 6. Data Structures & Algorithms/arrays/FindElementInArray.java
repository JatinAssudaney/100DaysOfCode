package arrays;

import java.util.Scanner;

public class FindElementInArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < length; i++) {
            arr[i] = sc.nextInt();
        }
        int num = sc.nextInt();
        int index = findElement(arr, num);
        System.out.println(index);
        sc.close();
    }

    private static int findElement(int[] arr, int num) {
        int len = arr.length;
        for (int i = 0; i < len; i++) {
            if (arr[i] == num) {
                return i;
            }
        }
        return -1;
    }

}
