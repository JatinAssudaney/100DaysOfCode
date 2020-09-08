package binary_tree;

import java.io.*;
import java.util.*;

public class KFar {
    public static class Node {
        int data;
        Node left;
        Node right;

        Node(int data, Node left, Node right) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    public static class Pair {
        Node node;
        int state;

        Pair(Node node, int state) {
            this.node = node;
            this.state = state;
        }
    }

    public static Node construct(Integer[] arr) {
        Node root = new Node(arr[0], null, null);
        Pair rtp = new Pair(root, 1);

        Stack<Pair> st = new Stack<>();
        st.push(rtp);

        int idx = 0;
        while (st.size() > 0) {
            Pair top = st.peek();
            if (top.state == 1) {
                idx++;
                if (arr[idx] != null) {
                    top.node.left = new Node(arr[idx], null, null);
                    Pair lp = new Pair(top.node.left, 1);
                    st.push(lp);
                } else {
                    top.node.left = null;
                }

                top.state++;
            } else if (top.state == 2) {
                idx++;
                if (arr[idx] != null) {
                    top.node.right = new Node(arr[idx], null, null);
                    Pair rp = new Pair(top.node.right, 1);
                    st.push(rp);
                } else {
                    top.node.right = null;
                }

                top.state++;
            } else {
                st.pop();
            }
        }

        return root;
    }

    public static void display(Node node) {
        if (node == null) {
            return;
        }

        String str = "";
        str += node.left == null ? "." : node.left.data + "";
        str += " <- " + node.data + " -> ";
        str += node.right == null ? "." : node.right.data + "";
        System.out.println(str);

        display(node.left);
        display(node.right);
    }

    static ArrayList<Node> path;

    public static boolean nodeToRootPath(Node node, int data) {
        if (node == null) {
            return false;
        }
        if (node.data == data) {
            path.add(node);
            return true;
        }
        boolean leftFound = nodeToRootPath(node.left, data);
        if (leftFound) {
            path.add(node);
            return true;
        }
        boolean rightFound = nodeToRootPath(node.right, data);
        if (rightFound) {
            path.add(node);
            return true;
        }
        return false;
    }

    public static void printKLevelsDown(Node node, int k, Node block) {
        if (node == null || k < 0 || node == block) {
            return;
        }
        if (k == 0) {
            System.out.println(node.data);
        }
        printKLevelsDown(node.left, k - 1, block);
        printKLevelsDown(node.right, k - 1, block);
    }

    public static void printKNodesFar(Node node, int data, int k) {
        path = new ArrayList<>();
        nodeToRootPath(node, data);
        for (int i = 0; i < path.size(); i++) {
            if (i == 0) {
                printKLevelsDown(path.get(i), k - i, null);
            } else {
                printKLevelsDown(path.get(i), k - i, path.get(i - 1));
            }
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        Integer[] arr = new Integer[n];
        String[] values = br.readLine().split(" ");
        for (int i = 0; i < n; i++) {
            if (values[i].equals("n") == false) {
                arr[i] = Integer.parseInt(values[i]);
            } else {
                arr[i] = null;
            }
        }

        int data = Integer.parseInt(br.readLine());
        int k = Integer.parseInt(br.readLine());

        Node root = construct(arr);
        printKNodesFar(root, data, k);
    }

}
