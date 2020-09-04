package recursion;

import java.util.ArrayList;
import java.util.Scanner;

public class GetSubsequence {
    public static ArrayList<String> gss(String str) {
        if (str.length() == 0) {
            ArrayList<String> bres = new ArrayList<>();
            bres.add("");
            return bres;
        }
        char ch = str.charAt(0);
        String ros = str.substring(1);
        ArrayList<String> rres = gss(ros);
        ArrayList<String> mres = new ArrayList<>();
        for (String string : rres) {
            mres.add("" + string);
        }
        for (String string : rres) {
            mres.add(ch + string);
        }
        return mres;
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        ArrayList<String> result = gss(str);
        System.out.println(result);
        sc.close();
    }

}
