package stacks_queues;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class NextGreaterOnRight {
    public static void display(int[] a) {
        StringBuilder sb = new StringBuilder();

        for (int val : a) {
            sb.append(val + "\n");
        }
        System.out.println(sb);
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = Integer.parseInt(br.readLine());
        }

        int[] nge = nextGreaterElement(a);
        display(nge);
    }

    public static int[] nextGreaterElement(int[] arr) {
        int[] res = new int[arr.length];
        Stack<Integer> st = new Stack<>();
        st.push(0);
        for (int i = 1; i < res.length; i++) {
            while (!st.isEmpty() && arr[st.peek()] <= arr[i]) {
                res[st.peek()] = arr[i];
                st.pop();
            }
            st.push(i);
        }
        for (int i = 0; i < res.length; i++) {
            if (res[i] == 0) {
                res[i] = -1;
            }
        }
        return res;
    }
}
