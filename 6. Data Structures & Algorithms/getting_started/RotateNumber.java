package getting_started;

import java.util.Scanner;

public class RotateNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        int k = sc.nextInt();
        long rotated = rotateNumber(n, k);
        System.out.println(rotated);
        sc.close();
    }

    private static int countDigits(long n) {
        int count = 0;
        while (n > 0) {
            n /= 10;
            count++;
        }
        return count;
    }

    private static long rotateNumber(long n, int k) {
        int digits = countDigits(n);
        k = k % digits;
        if (k < 0) {
            k += digits;
        }
        while (k > 0) {
            int rem = (int) (n % 10);
            n /= 10;
            n += rem * Math.pow(10, digits - 1);
            k--;
        }
        return n;
    }
}
