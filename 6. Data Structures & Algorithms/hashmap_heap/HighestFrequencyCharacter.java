package hashmap_heap;

import java.util.*;

public class HighestFrequencyCharacter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        char maxFrequencyCharacter = highestFrequencyCharacter(str);
        System.out.println(maxFrequencyCharacter);
        sc.close();
    }

    private static char highestFrequencyCharacter(String str) {
        HashMap<Character, Integer> freq = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            freq.put(ch, freq.getOrDefault(ch, 0) + 1);
        }
        char maxFrequencyChar = str.charAt(0);
        int maxFrequency = freq.get(maxFrequencyChar);
        for (Character key : freq.keySet()) {
            if (maxFrequency < freq.get(key)) {
                maxFrequencyChar = key;
                maxFrequency = freq.get(key);
            }
        }
        return maxFrequencyChar;
    }
}
