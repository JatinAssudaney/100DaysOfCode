// https://www.pepcoding.com/resources/online-java-foundation/graphs/infection-spread-official/ojquestion
package graphs;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class SpreadInfection {
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
        int time;

        Pair(int v, int time) {
            this.v = v;
            this.time = time;
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

        int src = Integer.parseInt(br.readLine());
        int timeLimit = Integer.parseInt(br.readLine());

        int res = spreadInfection(graph, src, timeLimit);
        System.out.println(res);
    }

    private static int spreadInfection(ArrayList<Edge>[] graph, int src, int timeLimit) {
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(src, 1));
        int[] visited = new int[graph.length];
        int patients = 0;

        while (queue.size() > 0) {
            // REMOVE
            Pair rem = queue.poll();

            // MARK*
            if (visited[rem.v] > 0) {
                continue;
            }
            visited[rem.v] = rem.time;

            // WORK
            if (rem.time <= timeLimit) {
                patients++;
            } else {
                break;
            }

            // ADD*
            for (Edge edge : graph[rem.v]) {
                if (visited[edge.nbr] == 0) {
                    queue.add(new Pair(edge.nbr, rem.time + 1));
                }
            }
        }
        return patients;
    }
}
