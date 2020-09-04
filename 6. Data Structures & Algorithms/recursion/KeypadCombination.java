package recursion;

import java.util.ArrayList;
import java.util.Scanner;

public class KeypadCombination {
    static String[] codes = { ".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz" };

    public static ArrayList<String> getKPC(String str) {
        if (str.length() == 0) {
            ArrayList<String> bres = new ArrayList<>();
            bres.add("");
            return bres;
        }

        char ch = str.charAt(0);
        String ros = str.substring(1);
        ArrayList<String> rres = getKPC(ros);
        ArrayList<String> mres = new ArrayList<>();
        String code = codes[ch - '0'];
        for (int i = 0; i < code.length(); i++) {
            for (String string : rres) {
                mres.add(code.charAt(i) + string);
            }
        }
        return mres;
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        ArrayList<String> result = getKPC(str);
        System.out.println(result);
        sc.close();
    }

}
