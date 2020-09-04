package recursion;

import java.util.Scanner;

public class PrintSubsequence {
    private static void printSSHelper(String str, String answer) {
        if (str.length() == 0) {
            System.out.println(answer);
            return;
        }
        char ch = str.charAt(0);
        String ros = str.substring(1);
        printSSHelper(ros, answer + ch);
        printSSHelper(ros, answer + "");
    }

    public static void printSS(String str) {
        printSSHelper(str, "");
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        printSS(str);
        sc.close();
    }

}
