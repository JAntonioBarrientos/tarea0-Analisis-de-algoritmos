import React from 'react';

const GraphPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Graph Algorithms</h1>

      <section className="introduction">
        <p>Graph algorithms are used to process and analyze graphs, which are mathematical structures representing relationships between objects. They are essential in fields such as computer networking, operations research, and artificial intelligence.</p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Graph Data Structure and Algorithms
            </a>
            <p>An extensive collection of tutorials on various graph algorithms like DFS, BFS, Dijkstra, etc.</p>
          </li>
          <li>
            <a href="https://visualgo.net/en/graphds" target="_blank" rel="noopener noreferrer">
              VisuAlgo: Visualize Graph Algorithms
            </a>
            <p>Visualize graph traversal algorithms and shortest path techniques in an interactive tool.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=09_LlHjoEiY" target="_blank" rel="noopener noreferrer">
              YouTube: Graph Algorithms (Video)
            </a>
            <p>A video tutorial that covers key graph algorithms and their practical applications.</p>
          </li>
          <li>
            <a href="https://cp-algorithms.com/graph/" target="_blank" rel="noopener noreferrer">
              Competitive Programming Algorithms: Graph Theory
            </a>
            <p>A collection of graph algorithms commonly used in competitive programming.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default GraphPage;
