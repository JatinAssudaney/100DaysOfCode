package arrays;

import java.util.*;

public class DigitFrequency {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int d = scn.nextInt();
        int f = getDigitFrequency(n, d);
        System.out.println(f);
        scn.close();
    }

    public static int getDigitFrequency(int n, int d) {
        int f = 0;
        while (n > 0) {
            int rem = n % 10;
            if (rem == d) {
                f++;
            }
            n /= 10;
        }
        return f;
    }
}