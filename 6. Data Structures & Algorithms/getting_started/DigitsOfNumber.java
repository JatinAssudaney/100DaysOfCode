package getting_started;

import java.util.Scanner;

public class DigitsOfNumber {

    private static int countDigits(long n) {
        int count = 0;
        while (n > 0) {
            n /= 10;
            count++;
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextInt();
        int digits = countDigits(n);
        int div = (int) Math.pow(10, digits - 1);
        while (div != 0) {
            int quotient = (int) (n / div);
            System.out.println(quotient);
            n = n % div;
            div /= 10;
        }
        sc.close();
    }
}
