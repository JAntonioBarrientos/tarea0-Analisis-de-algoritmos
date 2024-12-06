// src/components/FlowAlgorithms.tsx
import React from 'react';

const FlowAlgorithms: React.FC = () => {
  return (
    <div className="topic-content">
      <h2>Flujos en Grafos</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los algoritmos de flujo en grafos se utilizan para resolver problemas relacionados con el flujo de recursos a través de una red. Un ejemplo clásico es el problema del flujo máximo, donde se busca la máxima cantidad de flujo que puede enviarse desde una fuente a un sumidero en una red con capacidades limitadas.
        </p>
      </section>

      <section>
        <h3>Conceptos Clave</h3>
        <ul>
          <li><strong>Flujo:</strong> La cantidad de recurso que pasa a través de una arista.</li>
          <li><strong>Capacidad:</strong> La cantidad máxima de flujo que puede pasar por una arista.</li>
          <li><strong>Fuente y Sumidero:</strong> Los nodos desde donde comienza el flujo y donde termina.</li>
          <li><strong>Red Residual:</strong> Representa las capacidades restantes después de enviar el flujo actual.</li>
        </ul>
      </section>

      <section>
        <h3>Algoritmos Comunes de Flujos en Grafos</h3>
        <ul>
          <li><strong>Algoritmo de Ford-Fulkerson:</strong> Encuentra el flujo máximo iterativamente aumentando el flujo en caminos de aumento.</li>
          <li><strong>Algoritmo de Edmonds-Karp:</strong> Una implementación específica del Ford-Fulkerson que utiliza BFS para encontrar caminos de aumento.</li>
          <li><strong>Algoritmo de Dinic:</strong> Más eficiente que Ford-Fulkerson y Edmonds-Karp, utiliza una red de niveles para encontrar múltiples caminos de aumento simultáneamente.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplo de Código: Algoritmo de Edmonds-Karp en Python</h3>
        <pre>
{`from collections import deque

def bfs(residual_graph, source, sink, parent):
    visited = set()
    queue = deque()
    queue.append(source)
    visited.add(source)
    
    while queue:
        u = queue.popleft()
        for v, capacity in residual_graph[u].items():
            if v not in visited and capacity > 0:
                queue.append(v)
                visited.add(v)
                parent[v] = u
                if v == sink:
                    return True
    return False

def edmonds_karp(graph, source, sink):
    residual_graph = {u: dict(v) for u, v in graph.items()}
    parent = {}
    max_flow = 0

    while bfs(residual_graph, source, sink, parent):
        path_flow = float('Inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, residual_graph[parent[s]][s])
            s = parent[s]
        
        max_flow += path_flow

        v = sink
        while v != source:
            u = parent[v]
            residual_graph[u][v] -= path_flow
            residual_graph[v][u] = residual_graph.get(v, {}).get(u, 0) + path_flow
            v = u

    return max_flow

# Ejemplo de uso
graph = {
    'S': {'A': 16, 'C': 13},
    'A': {'B': 12, 'C': 10},
    'B': {'D': 20},
    'C': {'A': 4, 'D': 14},
    'D': {'B': 7, 'T': 4},
    'T': {}
}

source = 'S'
sink = 'T'

print("Flujo máximo:", edmonds_karp(graph, source, sink))  # Salida: Flujo máximo: 23`}
        </pre>
      </section>

      <section>
        <h3>Recursos Adicionales</h3>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/Flujo_en_grafo" target="_blank" rel="noopener noreferrer">
              Wikipedia: Flujo en grafo
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Algoritmo de Ford-Fulkerson
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=GW0KJ-KbxIg" target="_blank" rel="noopener noreferrer">
              Video: Algoritmo de Edmonds-Karp
            </a>
          </li>
          <li>
            <a href="https://visualgo.net/en/flow" target="_blank" rel="noopener noreferrer">
              Visualgo: Visualización de Algoritmos de Flujos en Grafos
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Diagramas y Visualizaciones</h3>
        <p>
          Utiliza <a href="https://visualgo.net/en/flow" target="_blank" rel="noopener noreferrer">Visualgo</a> para visualizar cómo funcionan los algoritmos de flujo en grafos, incluyendo el algoritmo de Edmonds-Karp.
        </p>
        <img src="https://visualgo.net/en/flow" alt="Visualización de Flujos en Grafos" style={{ width: '100%', maxWidth: '600px' }} />
      </section>
    </div>
  );
};

export default FlowAlgorithms;
