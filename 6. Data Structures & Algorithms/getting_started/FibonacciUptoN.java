package getting_started;

import java.util.Scanner;

public class FibonacciUptoN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] fib = new int[n];
        fib[0] = 0;
        fib[1] = 1;
        for (int i = 0; i < n; i++) {
            if (i == 0 || i == 1) {
                System.out.println(fib[i]);
                continue;
            }
            fib[i] = fib[i - 1] + fib[i - 2];
            System.out.println(fib[i]);
        }
        sc.close();
    }
}
