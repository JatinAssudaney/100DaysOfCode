package recursion;

import java.util.Scanner;

public class PrintPermutations {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        printPermutations(str);
        sc.close();
    }

    public static void printPermutations(String str) {
        printPermutationsHelper(str, "");
    }

    private static void printPermutationsHelper(String str, String psf) {
        if (str.length() == 0) {
            System.out.println(psf);
            return;
        }
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            String ros = str.substring(0, i) + str.substring(i + 1, str.length());
            printPermutationsHelper(ros, psf + ch);
        }
    }
}
