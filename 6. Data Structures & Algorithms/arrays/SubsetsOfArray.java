package arrays;

import java.util.Scanner;

public class SubsetsOfArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < length; i++) {
            arr[i] = sc.nextInt();
        }
        printSubsets(arr, length);
        sc.close();
    }

    private static void printSubsets(int[] arr, int length) {
        int limit = (int) Math.pow(2, arr.length);
        for (int i = 0; i < limit; i++) {
            int temp = i;
            String set = "";
            for (int j = length - 1; j >= 0; j--) {
                int r = temp % 2;
                temp = temp / 2;
                if (r == 0) {
                    set = "-\t" + set;
                } else {
                    set = arr[j] + "\t" + set;
                }
            }
            System.out.println(set);
        }
    }
}
