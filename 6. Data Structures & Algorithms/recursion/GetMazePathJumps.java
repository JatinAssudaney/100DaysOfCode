package recursion;

import java.util.ArrayList;
import java.util.Scanner;

public class GetMazePathJumps {
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

        ArrayList<String> paths = new ArrayList<>();

        // HORIZONTAL MOVES
        for (int ms = 1; ms <= dc - sc; ms++) {
            ArrayList<String> hpaths = getMazePaths(sr, sc + ms, dr, dc);
            for (String path : hpaths) {
                paths.add("h" + ms + path);
            }
        }
        // VERTICAL MOVES
        for (int ms = 1; ms <= dr - sr; ms++) {
            ArrayList<String> vpaths = getMazePaths(sr + ms, sc, dr, dc);
            for (String path : vpaths) {
                paths.add("v" + ms + path);
            }
        }
        // DIAGONAL MOVES
        for (int ms = 1; ms <= dc - sc && ms <= dr - sr; ms++) {
            ArrayList<String> hpaths = getMazePaths(sr + ms, sc + ms, dr, dc);
            for (String path : hpaths) {
                paths.add("d" + ms + path);
            }
        }
        return paths;
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
