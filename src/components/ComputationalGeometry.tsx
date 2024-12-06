// src/components/GraphAlgorithms.tsx
import React from 'react';

const GraphAlgorithms: React.FC = () => {
  return (
    <div className="topic-content">
      <h2>Algoritmos en Grafos</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los grafos son estructuras de datos que consisten en nodos (vértices) y aristas (edges) que conectan pares de nodos. Los algoritmos en grafos son fundamentales para resolver una variedad de problemas en informática, como rutas más cortas, flujo máximo, y componentes conectados.
        </p>
      </section>

      <section>
        <h3>Tipos de Grafos</h3>
        <ul>
          <li><strong>Grafos Dirigidos:</strong> Las aristas tienen una dirección específica de un nodo a otro.</li>
          <li><strong>Grafos No Dirigidos:</strong> Las aristas no tienen dirección; la conexión es bidireccional.</li>
          <li><strong>Grafos Ponderados:</strong> Las aristas tienen un peso o costo asociado.</li>
          <li><strong>Grafos No Ponderados:</strong> Las aristas no tienen peso asociado.</li>
        </ul>
      </section>

      <section>
        <h3>Algoritmos Comunes en Grafos</h3>
        <ul>
          <li><strong>Algoritmo de Dijkstra:</strong> Encuentra las rutas más cortas desde un nodo de origen a todos los demás nodos en un grafo ponderado.</li>
          <li><strong>Algoritmo de Kruskal:</strong> Encuentra el Árbol de Expansión Mínima (MST) de un grafo.</li>
          <li><strong>Algoritmo de Prim:</strong> Otro algoritmo para encontrar el MST.</li>
          <li><strong>Búsqueda en Anchura (BFS) y Búsqueda en Profundidad (DFS):</strong> Algoritmos para explorar grafos.</li>
          <li><strong>Algoritmo de Floyd-Warshall:</strong> Encuentra las rutas más cortas entre todos los pares de nodos.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplo de Código: Algoritmo de Dijkstra en JavaScript</h3>
        <pre>
{`// Representación del grafo como una lista de adyacencia
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const priorityQueue = new PriorityQueue();

  // Inicializar distancias
  for (let node in graph) {
    distances[node] = node === start ? 0 : Infinity;
  }

  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const { element: current } = priorityQueue.dequeue();
    if (visited.has(current)) continue;
    visited.add(current);

    for (let neighbor in graph[current]) {
      const newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        priorityQueue.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
}

// Implementación de una Cola de Prioridad simple
class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element, priority) {
    const newNode = { element, priority };
    if (this.isEmpty()) {
      this.collection.push(newNode);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (newNode.priority < this.collection[i].priority) {
          this.collection.splice(i, 0, newNode);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(newNode);
      }
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

const distances = dijkstra(graph, 'A');
console.log(distances); // Salida: { A: 0, B: 1, C: 3, D: 4 }`}
        </pre>
      </section>

      <section>
        <h3>Recursos Adicionales</h3>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/Grafo_(matem%C3%A1ticas)" target="_blank" rel="noopener noreferrer">
              Wikipedia: Grafo (Matemáticas)
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Graph Data Structure and Algorithms
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=pcKY4hjDrxk" target="_blank" rel="noopener noreferrer">
              Video: Algoritmo de Dijkstra
            </a>
          </li>
          <li>
            <a href="https://visualgo.net/en/sssp" target="_blank" rel="noopener noreferrer">
              Visualgo: Visualización de Algoritmos de Grafos
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Diagramas y Visualizaciones</h3>
        <p>
          Herramientas como <a href="https://visualgo.net/en/sssp" target="_blank" rel="noopener noreferrer">Visualgo</a> te permiten visualizar cómo funcionan los algoritmos de grafos, incluyendo el Algoritmo de Dijkstra.
        </p>
        <img src="https://visualgo.net/en/sssp" alt="Visualización de Algoritmos en Grafos" style={{ width: '100%', maxWidth: '600px' }} />
      </section>
    </div>
  );
};

export default GraphAlgorithms;
