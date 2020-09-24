package arrays;

import java.util.Scanner;

public class SumOfTwoArrays {
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
        int[] sum = sumOfArrays(first, second, length1, length2);
        for (int i = 0; i < sum.length; i++) {
            System.out.println(sum[i]);
        }
        sc.close();
    }

    private static int[] sumOfArrays(int[] first, int[] second, int length1, int length2) {
        int length = Math.max(length1, length2);
        int[] sum = new int[length];
        int carry = 0;
        int i, j;
        int k = length - 1;
        for (i = length1 - 1, j = length2 - 1; i >= 0 && j >= 0; i--, j--) {
            int localSum = first[i] + second[j] + carry;
            carry = localSum / 10;
            localSum = localSum % 10;
            sum[k] = localSum;
            k--;
        }
        while (i >= 0) {
            int localSum = first[i] + carry;
            carry = localSum / 10;
            localSum = localSum % 10;
            sum[k] = localSum;
            i--;
            k--;
        }
        while (j >= 0) {
            int localSum = second[j] + carry;
            carry = localSum / 10;
            localSum = localSum % 10;
            sum[k] = localSum;
            j--;
            k--;
        }
        return sum;
    }
}
