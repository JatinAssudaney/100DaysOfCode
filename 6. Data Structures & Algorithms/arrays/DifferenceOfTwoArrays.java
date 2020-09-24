package arrays;

import java.util.Scanner;

public class DifferenceOfTwoArrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length1 = sc.nextInt();
        int[] first = new int[length1];
        for (int i = 0; i < length1; i++) {
            first[i] = sc.nextInt();
        }
        int length2 = sc.nextInt();
        int[] second = new int[length2];
        for (int i = 0; i < length2; i++) {
            second[i] = sc.nextInt();
        }
        int[] diff = differenceOfArrays(first, second, length1, length2);
        // LEADING ZEROES
        int index = 0;
        while (diff[index] == 0) {
            index++;
        }
        for (int i = index; i < diff.length; i++) {
            System.out.println(diff[i]);
        }
        sc.close();
    }

    private static int[] differenceOfArrays(int[] first, int[] second, int length1, int length2) {
        int length = Math.max(length1, length2);
        int[] diff = new int[length];
        int borrow = 0;
        int i, j;
        int k = length - 1;
        for (i = length1 - 1, j = length2 - 1; i >= 0 && j >= 0; i--, j--) {
            int localDiff = second[j] - first[i] - borrow;
            borrow = localDiff < 0 ? 1 : 0;
            localDiff = localDiff < 0 ? localDiff + 10 : localDiff;
            diff[k] = localDiff;
            k--;
        }
        while (j >= 0) {
            int localDiff = second[j] - borrow;
            borrow = 0;
            diff[k] = localDiff;
            j--;
            k--;
        }
        return diff;
    }
}
