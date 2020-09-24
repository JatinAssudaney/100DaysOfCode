package arrays;

import java.util.Scanner;

public class BarChart {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < length; i++) {
            arr[i] = sc.nextInt();
        }
        int[][] barChart = makeBarChart(arr);
        int row = barChart.length;
        int col = barChart[0].length;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (barChart[i][j] == 1) {
                    System.out.print("*\t");
                } else if (barChart[i][j] == 0) {
                    System.out.print("\t");
                }
            }
            System.out.println();
        }
        sc.close();
    }

    private static int[][] makeBarChart(int[] arr) {
        int length = arr.length;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < length; i++) {
            max = Math.max(max, arr[i]);
        }
        int[][] barChart = new int[max][length];
        for (int i = max - 1; i >= 0; i--) {
            for (int j = 0; j < length; j++) {
                if (arr[j] > 0) {
                    barChart[i][j] = 1;
                    arr[j]--;
                }
            }
        }
        return barChart;
    }
}
