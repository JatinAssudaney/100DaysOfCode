package recursion;

import java.util.ArrayList;
import java.util.Scanner;

public class GetStairsPaths {

    public static ArrayList<String> getStairPaths(int n) {
        if (n == 0) {
            ArrayList<String> bres = new ArrayList<>();
            bres.add("");
            return bres;
        }
        if (n < 0) {
            ArrayList<String> bres = new ArrayList<>();
            return bres;
        }
        ArrayList<String> path1 = getStairPaths(n - 1);
        ArrayList<String> path2 = getStairPaths(n - 2);
        ArrayList<String> path3 = getStairPaths(n - 3);
        ArrayList<String> mres = new ArrayList<>();
        for (String path : path1) {
            mres.add(1 + path);
        }
        for (String path : path2) {
            mres.add(2 + path);
        }
        for (String path : path3) {
            mres.add(3 + path);
        }
        return mres;
    }

    // PROACTIVE CALLS
    public static ArrayList<String> getStairPaths2(int n) {
        if (n == 0) {
            ArrayList<String> bres = new ArrayList<>();
            bres.add("");
            return bres;
        }
        if (n < 0) {
            ArrayList<String> bres = new ArrayList<>();
            return bres;
        }
        ArrayList<String> path1 = new ArrayList<>();
        ArrayList<String> path2 = new ArrayList<>();
        ArrayList<String> path3 = new ArrayList<>();
        if (n - 1 >= 0) {
            path1 = getStairPaths2(n - 1);
        }
        if (n - 2 >= 0) {
            path2 = getStairPaths2(n - 2);
        }
        if (n - 3 >= 0) {
            path3 = getStairPaths2(n - 3);
        }
        ArrayList<String> mres = new ArrayList<>();
        for (String path : path1) {
            mres.add(1 + path);
        }
        for (String path : path2) {
            mres.add(2 + path);
        }
        for (String path : path3) {
            mres.add(3 + path);
        }
        return mres;
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<String> result = getStairPaths2(n);
        System.out.println(result);
        sc.close();

    }

}
