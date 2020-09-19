package getting_started;

import java.util.Scanner;

public class BenjaminBulbs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        switchedOnBulbs(n);
        sc.close();
    }

    private static void switchedOnBulbs(long n) {
        for (int i = 1; i <= Math.sqrt(n); i++) {
            System.out.println(i * i);
        }
    }
}
