package recursion;

import java.util.Scanner;

public class PrintDecreasingIncreasing {
    public static void pdi(int num) {
        if (num == 0)
            return;
        System.out.print(num + " ");
        pdi(num - 1);
        System.out.print(num + " ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        pdi(num);
        sc.close();
    }

}
