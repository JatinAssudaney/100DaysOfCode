package recursion;

import java.util.Scanner;

public class MaxOfArray {
    static int max = Integer.MIN_VALUE;

    public static int maxOfArray(int[] arr, int idx) {
        if (idx == arr.length) {
            return max;
        }
        if (max < arr[idx]) {
            max = arr[idx];
        }
        max = maxOfArray(arr, idx + 1);
        return max;
    }

    public static int maxOfArray2(int[] arr, int idx) {
        if (idx == arr.length - 1) {
            return arr[idx];
        }
        int misa = maxOfArray2(arr, idx + 1);
        if (misa > arr[idx]) {
            return misa;
        } else {
            return arr[idx];
        }
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        int length = sc.nextInt();
        int[] arr = new int[length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        int max = maxOfArray(arr, 0);
        System.out.println(max);

        max = maxOfArray2(arr, 0);
        System.out.println(max);
        sc.close();
    }

}
