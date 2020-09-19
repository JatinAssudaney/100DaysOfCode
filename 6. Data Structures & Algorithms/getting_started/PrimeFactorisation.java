package getting_started;

import java.util.Scanner;

public class PrimeFactorisation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        String res = primeFactors(n);
        System.out.println(res);
        sc.close();
    }

    private static String primeFactors(long n) {
        String res = "";
        int i = 2;
        while (i <= Math.sqrt(n)) {
            if (n % i == 0) {
                n /= i;
                res += i + " ";
                continue;
            }
            i++;
        }
        res += n;
        return res;
    }
}
