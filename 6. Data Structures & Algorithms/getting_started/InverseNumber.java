package getting_started;

import java.util.Scanner;

public class InverseNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        long inversed = inverseNumber(n);
        System.out.println(inversed);
        sc.close();
    }

    private static long inverseNumber(long n) {
        int count = 1;
        int res = 0;
        while (n > 0) {
            int rem = (int) n % 10;
            res += (int) ((int) count * Math.pow(10, rem - 1));
            count++;
            n /= 10;
        }
        return res;
    }
}
