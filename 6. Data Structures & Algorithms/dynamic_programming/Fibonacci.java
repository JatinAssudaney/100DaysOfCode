package dynamic_programming;

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int fibn = fibMemoized(n, new int[n + 1]);
        System.out.println(fibn);
        sc.close();
    }

    private static int fibMemoized(int n, int[] qb) {
        if (n == 0 || n == 1) {
            return n;
        }
        if (qb[n] != 0) {
            return qb[n];
        }
        int fnm1 = fibMemoized(n - 1, qb);
        int fnm2 = fibMemoized(n - 2, qb);
        int fibn = fnm1 + fnm2;
        qb[n] = fibn;
        return fibn;
    }
}
