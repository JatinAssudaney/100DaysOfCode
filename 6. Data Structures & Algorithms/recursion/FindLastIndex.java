package recursion;

import java.util.Scanner;

public class FindLastIndex {
    public static int lastIndex(int[] arr, int idx, int x) {
        if (idx == arr.length) {
            return -1;
        }
        int res = lastIndex(arr, idx + 1, x);
        if (res == -1) {
            if (arr[idx] == x) {
                return idx;
            } else {
                return -1;
            }
        } else {
            return res;
        }
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        int x = sc.nextInt();
        int res = lastIndex(arr, 0, x);
        System.out.println(res);
        sc.close();
    }
}
