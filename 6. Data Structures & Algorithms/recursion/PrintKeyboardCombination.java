package recursion;

import java.util.Scanner;

public class PrintKeyboardCombination {
    static String[] codes = { ".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz" };

    private static void printKPCHelper(String str, String answer) {
        if (str.length() == 0) {
            System.out.println(answer);
            return;
        }
        char ch = str.charAt(0);
        String ros = str.substring(1);
        String code = codes[ch - '0'];
        for (int i = 0; i < code.length(); i++) {
            printKPCHelper(ros, answer + code.charAt(i));
        }
    }

    public static void printKPC(String str) {
        printKPCHelper(str, "");
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        printKPC(str);
        sc.close();
    }

}
