package getting_started;

import java.util.Scanner;

public class IsPythagoreanTriplet {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        boolean res = isPythagoreanTriplet(a, b, c);
        System.out.println(res);
        sc.close();
    }

    private static boolean isPythagoreanTriplet(int a, int b, int c) {
        int max = Math.max(Math.max(a, b), c);
        if (a == max && Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2)) {
            return true;
        }
        if (b == max && Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2)) {
            return true;
        }
        if (c == max && Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
            return true;
        }
        return false;
    }
}
