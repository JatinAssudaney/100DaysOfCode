package arrays;

import java.util.*;

public class AnyBaseToDecimal {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int b = scn.nextInt();
        int d = getValueIndecimal(n, b);
        System.out.println(d);
        scn.close();
    }

    public static int getValueIndecimal(int n, int b) {
        int res = 0;
        int count = 1;
        while (n > 0) {
            int rem = n % 10;
            res += rem * Math.pow(b, count - 1);
            count++;
            n /= 10;
        }
        return res;
    }
}