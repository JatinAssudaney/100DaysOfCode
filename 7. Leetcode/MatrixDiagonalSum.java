// https://leetcode.com/problems/matrix-diagonal-sum/

public class MatrixDiagonalSum {
    public int diagonalSum(int[][] mat) {
        int length = mat.length;
        int sum = 0;
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                if (i == j || i + j == length - 1) {
                    sum += mat[i][j];
                }
            }
        }
        return sum;
    }

    public int diagonalSumLinear(int[][] mat) {
        int n = mat.length, res = 0;
        for (int i = 0; i < n; i++) {
            res += mat[i][i];
            if (i != n - 1 - i)
                res += mat[i][n - 1 - i];
        }
        return res;
    }
}
