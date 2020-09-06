package stacks_queues;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class LargestAreaHistogram {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = Integer.parseInt(br.readLine());
        }
        int res = largestAreaHistogram(a);
        System.out.println(res);
    }

    private static int largestAreaHistogram(int[] a) {
        int length = a.length;
        int[] right = new int[length]; // Next smaller on the right
        int[] left = new int[length]; // Next smaller on the left
        Stack<Integer> st = new Stack<>();
        st.push(length - 1);
        right[length - 1] = length;
        for (int i = length - 2; i >= 0; i--) {
            while (!st.isEmpty() && a[st.peek()] >= a[i]) {
                st.pop();
            }
            if (st.isEmpty()) {
                right[i] = length;
            } else {
                right[i] = st.peek();
            }
            st.push(i);
        }

        st = new Stack<>();
        st.push(0);
        left[0] = -1;
        for (int i = 1; i < length; i++) {
            while (!st.isEmpty() && a[st.peek()] >= a[i]) {
                st.pop();
            }
            if (st.isEmpty()) {
                left[i] = -1;
            } else {
                left[i] = st.peek();
            }
            st.push(i);
        }

        int maxArea = 0;
        for (int i = 0; i < length; i++) {
            int width = right[i] - left[i] - 1;
            int area = a[i] * width;
            if (maxArea < area) {
                maxArea = area;
            }
        }
        return maxArea;
    }
}
