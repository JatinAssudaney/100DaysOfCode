package arrays;

import java.util.*;

public class AnyBaseAddition {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int b = scn.nextInt();
        int n1 = scn.nextInt();
        int n2 = scn.nextInt();

        int d = getSum(b, n1, n2);
        System.out.println(d);
        scn.close();
    }

    public static int getSum(int b, int n1, int n2) {
        int res = 0;
        int carry = 0;
        int pow = 1;
        while (n1 > 0 || n2 > 0 || carry > 0) {
            int d1 = n1 % 10;
            int d2 = n2 % 10;
            n1 /= 10;
            n2 /= 10;
            int digit = (d1 + d2 + carry);
            carry = digit / b;
            digit = digit % b;
            res += digit * pow;
            pow = pow * 10;
        }
        return res;
    }
}
