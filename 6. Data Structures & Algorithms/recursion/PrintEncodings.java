package recursion;

import java.util.Scanner;

public class PrintEncodings {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        printEncodings(str);
        sc.close();
    }

    public static void printEncodings(String str) {
        printEncodingsHelper(str, "");
    }

    private static void printEncodingsHelper(String str, String psf) {
        if (str.length() == 0) {
            System.out.println(psf);
            return;
        } else if (str.length() == 1) {
            char ch = str.charAt(0);
            if (ch == '0') {
                return;
            } else {
                int chv = ch - '0';
                char code = (char) ('a' + chv - 1);
                psf = psf + code;
                System.out.println(psf);
            }
        } else {
            char ch = str.charAt(0);
            String ros = str.substring(1);
            if (ch == '0') {
                return;
            } else {
                int chv = ch - '0';
                char code = (char) ('a' + chv - 1);
                printEncodingsHelper(ros, psf + code);
            }
            String nextch = str.substring(0, 2);
            String roq = str.substring(2);
            int nextchv = Integer.parseInt(nextch);
            if (nextchv <= 26) {
                char code = (char) ('a' + nextchv - 1);
                printEncodingsHelper(roq, psf + code);
            }
        }

    }
}
