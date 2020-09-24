package arrays;

import java.util.Scanner;

public class ReverseAnArray {
    public static void display(int[] a) {
        StringBuilder sb = new StringBuilder();
        for (int val : a) {
            sb.append(val + " ");
        }
        System.out.println(sb);
    }

    public static void reverse(int[] a) {
        int length = a.length;
        for (int i = 0; i < length / 2; i++) {
            int temp = a[i];
            a[i] = a[length - i - 1];
            a[length - i - 1] = temp;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] a = new int[length];
        for (int i = 0; i < length; i++) {
            a[i] = sc.nextInt();
        }
        reverse(a);
        display(a);
        sc.close();
    }
}
