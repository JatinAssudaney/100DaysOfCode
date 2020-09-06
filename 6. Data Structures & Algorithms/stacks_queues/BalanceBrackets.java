package stacks_queues;

import java.util.Scanner;
import java.util.Stack;

public class BalanceBrackets {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        boolean res = balanceBrackets(str);
        System.out.println(res);
        sc.close();
    }

    private static boolean balanceBrackets(String str) {
        Stack<Character> st = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (isClosingBracket(ch)) {
                if (st.size() == 0) {
                    return false;
                } else if (compareCorresponding(st.peek(), ch)) {
                    st.pop();
                } else {
                    return false;
                }
            } else {
                if (isOpeningBracket(ch)) {
                    st.push(ch);
                } else {
                    continue;
                }
            }
        }
        return st.size() == 0 ? true : false;
    }

    private static boolean compareCorresponding(Character peek, char ch) {
        if (ch == ')') {
            return peek == '(' ? true : false;
        } else if (ch == ']') {
            return peek == '[' ? true : false;
        } else {
            return peek == '{' ? true : false;
        }
    }

    private static boolean isOpeningBracket(char ch) {
        if (ch == '[' || ch == '{' || ch == '(') {
            return true;
        }
        return false;
    }

    private static boolean isClosingBracket(char ch) {
        if (ch == ']' || ch == '}' || ch == ')') {
            return true;
        }
        return false;
    }
}
