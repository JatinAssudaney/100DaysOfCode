package graphs;

import java.util.Scanner;

public class KnightsTour {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int srcRow = sc.nextInt();
        int srcCol = sc.nextInt();
        int[][] chess = new int[n][n];
        printKnightsTour(chess, srcRow, srcCol, 1);
        sc.close();
    }

    public static void printKnightsTour(int[][] chess, int row, int col, int move) {
        if (isInvalid(chess, row, col)) {
            return;
        } else if (move == chess.length * chess.length) {
            chess[row][col] = move;
            displayBoard(chess);
            chess[row][col] = 0;
            return;
        }

        chess[row][col] = move;

        printKnightsTour(chess, row - 2, col + 1, move + 1);
        printKnightsTour(chess, row - 1, col + 2, move + 1);
        printKnightsTour(chess, row + 1, col + 2, move + 1);
        printKnightsTour(chess, row + 2, col + 1, move + 1);
        printKnightsTour(chess, row + 2, col - 1, move + 1);
        printKnightsTour(chess, row + 1, col - 2, move + 1);
        printKnightsTour(chess, row - 1, col - 2, move + 1);
        printKnightsTour(chess, row - 2, col - 1, move + 1);

        chess[row][col] = 0;

    }

    private static boolean isInvalid(int[][] chess, int row, int col) {
        if (row < 0 || col < 0 || row >= chess.length || col >= chess[0].length || chess[row][col] > 0) {
            return true;
        }
        return false;
    }

    public static void displayBoard(int[][] chess) {
        for (int i = 0; i < chess.length; i++) {
            for (int j = 0; j < chess[0].length; j++) {
                System.out.print(chess[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println();
    }
}
