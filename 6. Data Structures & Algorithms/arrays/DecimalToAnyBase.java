package arrays;

import java.util.*;

public class DecimalToAnyBase {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int b = scn.nextInt();
        int dn = getValueInBase(n, b);
        System.out.println(dn);
        scn.close();
    }

    public static int getValueInBase(int n, int b) {
        int count = 1;
        int res = 0;
        while (n > 0) {
            int rem = n % b;
            res += rem * Math.pow(10, count - 1);
            count++;
            n /= b;
        }
        return res;
    }
}