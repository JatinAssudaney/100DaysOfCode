package recursion;

import java.util.*;

public class TowerOfHanoi {
    public static void toh(int disk, int src, int dest, int helper) {
        if (disk == 0)
            return;
        toh(disk - 1, src, helper, dest);
        System.out.println(disk + "[" + src + " -> " + dest + "]");
        toh(disk - 1, helper, dest, src);
    }

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner sc = new Scanner(System.in);
        int disk = sc.nextInt();
        int src = sc.nextInt();
        int dest = sc.nextInt();
        int helper = sc.nextInt();
        toh(disk, src, dest, helper);
        sc.close();
    }

}
