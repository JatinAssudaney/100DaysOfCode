package graphs;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class IsCyclic {
    static class Edge {
        int src;
        int nbr;

        Edge(int src, int nbr) {
            this.src = src;
            this.nbr = nbr;
        }
    }

    static class Pair {
        int v;
        String path;

        Pair(int v, String path) {
            this.v = v;
            this.path = path;
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int vtces = Integer.parseInt(br.readLine());
        ArrayList<Edge>[] graph = new ArrayList[vtces];
        for (int i = 0; i < vtces; i++) {
            graph[i] = new ArrayList<>();
        }

        int edges = Integer.parseInt(br.readLine());
        for (int i = 0; i < edges; i++) {
            String[] parts = br.readLine().split(" ");
            int v1 = Integer.parseInt(parts[0]);
            int v2 = Integer.parseInt(parts[1]);
            graph[v1].add(new Edge(v1, v2));
            graph[v2].add(new Edge(v2, v1));
        }

        boolean res = false;
        for (int i = 0; i < vtces; i++) {
            res = res || isCyclic(graph, i, "");
        }
        System.out.println(res);
    }

    private static boolean isCyclic(ArrayList<Edge>[] graph, int src, String path) {
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(src, src + ""));
        boolean[] visited = new boolean[graph.length];
        while (queue.size() > 0) {
            // REMOVE
            Pair rem = queue.poll();

            // MARK*
            if (visited[rem.v]) {
                return true;
            }
            visited[rem.v] = true;

            // WORK

            // ADD*
            for (Edge edge : graph[rem.v]) {
                if (!visited[edge.nbr]) {
                    queue.add(new Pair(edge.nbr, rem.path + edge.nbr));
                }
            }
        }
        return false;
    }
}
