package getting_started;

import java.util.Scanner;

public class GCDAndLCM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int gcd = getGCD(a, b);
        int lcm = getLCM(a, b);
        System.out.println(gcd);
        System.out.println(lcm);
        sc.close();
    }

    private static int getLCM(int a, int b) {
        return (a * b) / getGCD(a, b);
    }

    private static int getGCD(int a, int b) {
        if (a == 0)
            return b;
        return getGCD(b % a, a);
    }
}
