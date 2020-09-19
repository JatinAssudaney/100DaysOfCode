package arrays;

import java.util.*;

public class AnyBaseToAnyBase {
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

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int sourceBase = scn.nextInt();
        int destBase = scn.nextInt();
        int res = getValueIndecimal(n, sourceBase);
        int answer = getValueInBase(res, destBase);
        System.out.println(answer);
        scn.close();
    }
}
