package recursion;

import java.util.ArrayList;
import java.util.Scanner;

public class GetMazePaths {
    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        if (sr == dr && sc == dc) {
            ArrayList<String> bres = new ArrayList<>();
            bres.add("");
            return bres;
        }
        ArrayList<String> hpaths = new ArrayList<>();
        ArrayList<String> vpaths = new ArrayList<>();
        if (sc < dc) {
            hpaths = getMazePaths(sr, sc + 1, dr, dc);
        }
        if (sr < dr) {
            vpaths = getMazePaths(sr + 1, sc, dr, dc);
        }
        ArrayList<String> mres = new ArrayList<>();
        for (String string : hpaths) {
            mres.add("h" + string);
        }
        for (String string : vpaths) {
            mres.add("v" + string);
        }
        return mres;
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int col = sc.nextInt();
        ArrayList<String> result = getMazePaths(1, 1, row, col);
        System.out.println(result);
        sc.close();
    }

}
