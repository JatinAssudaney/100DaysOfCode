// https://www.pepcoding.com/resources/online-java-foundation/graphs/perfect-friends-official/ojquestion
package graphs;

import java.io.*;
import java.util.*;

public class PerfectFriends {
    static class Edge {
        int v;
        int n;

        Edge(int v, int n) {
            this.v = v;
            this.n = n;
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int vtces = Integer.parseInt(br.readLine());
        int k = Integer.parseInt(br.readLine());
        ArrayList<Edge>[] graph = new ArrayList[vtces];
        for (int v = 0; v < vtces; v++) {
            graph[v] = new ArrayList<>();
        }
        for (int e = 0; e < k; e++) {
            String[] parts = br.readLine().split(" ");
            int v1 = Integer.parseInt(parts[0]);
            int v2 = Integer.parseInt(parts[1]);
            graph[v1].add(new Edge(v1, v2));
            graph[v2].add(new Edge(v2, v1));
        }

        boolean[] visited = new boolean[vtces];
        ArrayList<ArrayList<Integer>> components = new ArrayList<>();
        for (int v = 0; v < vtces; v++) {
            if (!visited[v]) {
                ArrayList<Integer> component = new ArrayList<>();
                getConnectedComponents(graph, v, visited, component);
                components.add(component);

            }
        }

        int pairs = 0;
        for (int i = 0; i < components.size(); i++) {
            for (int j = i + 1; j < components.size(); j++) {
                pairs += components.get(i).size() * components.get(j).size();
            }
        }
        System.out.println(pairs);
    }

    private static void getConnectedComponents(ArrayList<Edge>[] graph, int src, boolean[] visited,
            ArrayList<Integer> component) {
        visited[src] = true;
        component.add(src);
        for (Edge edge : graph[src]) {
            if (!visited[edge.n]) {
                getConnectedComponents(graph, edge.n, visited, component);
            }
        }
    }

}
