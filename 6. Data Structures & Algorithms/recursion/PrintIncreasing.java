package recursion;

import java.util.Scanner;

public class PrintIncreasing {
    public static void printIncreasing(int num) {
        if (num == 0)
            return;
        printIncreasing(num - 1);
        System.out.print(num + " ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        printIncreasing(num);
        sc.close();
    }
}
