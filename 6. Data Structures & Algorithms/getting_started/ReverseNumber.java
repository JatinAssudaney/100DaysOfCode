package getting_started;

import java.util.Scanner;

public class ReverseNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextInt();
        long reversed = reverseNumber(n);
        System.out.println(reversed);
        sc.close();
    }

    private static long reverseNumber(long n) {
        int temp = 0;
        while (n > 0) {
            int rem = (int) n % 10;
            n = n / 10;
            temp = temp * 10 + rem;
        }
        return temp;
    }
}
