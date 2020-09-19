package getting_started;

import java.util.Scanner;

public class PrintAllPrimesRange {

    private static boolean isPrime(int n) {
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int low = sc.nextInt();
        int high = sc.nextInt();
        for (int i = low; i <= high; i++) {
            if (i == 1 || i == 0) {
                continue;
            }
            boolean flag = isPrime(i);
            if (flag) {
                System.out.println(i);
            }
        }
        sc.close();
    }
}
