package recursion;

import java.util.Scanner;

public class FindFirstIndex {

    public static int firstIndex(int[] arr, int idx, int x) {
        if (idx == arr.length) {
            return -1;
        }
        if (arr[idx] == x) {
            return idx;
        }
        int res = firstIndex(arr, idx + 1, x);
        return res;
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        int x = sc.nextInt();
        int res = firstIndex(arr, 0, x);
        System.out.println(res);
        sc.close();
    }
}
