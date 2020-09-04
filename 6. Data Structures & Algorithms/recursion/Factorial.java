package recursion;

import java.util.*;

public class Factorial {
    private static int factorial(int num) {
        if (num == 1) {
            return 1;
        }
        int fm1 = factorial(num - 1);
        int fact = num * fm1;
        return fact;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(factorial(num));
        sc.close();
    }
}
