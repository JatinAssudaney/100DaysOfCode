// https://www.pepcoding.com/resources/online-java-foundation/graphs/count-islands-official/ojquestion
package graphs;

import java.io.*;
import java.util.*;

public class CountIslands {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int row = Integer.parseInt(br.readLine());
        int col = Integer.parseInt(br.readLine());
        int[][] arr = new int[row][col];

        for (int i = 0; i < row; i++) {
            String parts = br.readLine();
            for (int j = 0; j < col; j++) {
                arr[i][j] = Integer.parseInt(parts.split(" ")[j]);
            }
        }
        int countOfIslands = 0;
        boolean[][] visited = new boolean[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (arr[i][j] == 0 && !visited[i][j]) {
                    getConnectedIslands(arr, i, j, visited);
                    countOfIslands++;
                }

            }
        }
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(visited[i][j] + "\t");
            }
            System.out.println();
        }
        System.out.println(countOfIslands);

    }

    private static void getConnectedIslands(int[][] arr, int i, int j, boolean[][] visited) {
        if (isInvalid(arr, i, j, visited)) {
            return;
        }
        visited[i][j] = true;
        getConnectedIslands(arr, i - 1, j, visited);
        getConnectedIslands(arr, i, j + 1, visited);
        getConnectedIslands(arr, i, j - 1, visited);
        getConnectedIslands(arr, i + 1, j, visited);
    }

    private static boolean isInvalid(int[][] arr, int i, int j, boolean[][] visited) {
        if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length || arr[i][j] == 1 || visited[i][j]) {
            return true;
        }
        return false;
    }

}
