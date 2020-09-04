package recursion;

import java.util.Scanner;

public class Power {
    public static int power(int num, int pow) {
        if (pow == 0) {
            return 1;
        }
        int powHalf = power(num, pow / 2);
        if (pow % 2 == 1) {
            return num * powHalf * powHalf;
        } else {
            return powHalf * powHalf;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int pow = sc.nextInt();
        System.out.println(power(num, pow));
        sc.close();
    }
}
