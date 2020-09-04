package recursion;

import java.util.Scanner;

public class PrintDecreasing {

    public static void printDecreasing(int num) {
        if (num == 0)
            return;

        System.out.print(num + " ");
        printDecreasing(num - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        printDecreasing(num);
        sc.close();
    }

}
