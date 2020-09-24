package two_dimensional_arrays;

import java.util.Scanner;

public class SearchInSortedArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[][] arr = new int[length][length];
        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        int find = sc.nextInt();
        int[] found = searchInArray(arr, length, find);
        if (found[0] != -1) {
            System.out.println(found[0]);
            System.out.println(found[1]);
        } else {
            System.out.println("Not Found");
        }
        sc.close();
    }

    private static int[] searchInArray(int[][] arr, int length, int find) {
        int[] found = new int[2];
        found[0] = -1;
        found[1] = -1;
        int i = 0;
        int j = length - 1;
        while (i < length && j >= 0) {
            if (arr[i][j] < find) {
                i++;
            } else if (arr[i][j] > find) {
                j--;
            } else {
                found[0] = i;
                found[1] = j;
                break;
            }
        }
        return found;
    }
}
