import React from 'react';

const SearchPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Search Algorithms</h1>

      <section className="introduction">
        <p>Search algorithms are designed to retrieve information from data structures, such as arrays, trees, and graphs. They are crucial in many applications, including databases and networking. Common search algorithms include linear search, binary search, depth-first search (DFS), and breadth-first search (BFS).</p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/search-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Search Algorithms
            </a>
            <p>A collection of different search algorithms, including linear and binary search, with detailed explanations.</p>
          </li>
          <li>
            <a href="https://www.programiz.com/dsa/searching-algorithms" target="_blank" rel="noopener noreferrer">
              Programiz: Searching Algorithms
            </a>
            <p>An overview of basic and advanced searching algorithms with examples and visualizations.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=YKHMKZg_6FY" target="_blank" rel="noopener noreferrer">
              YouTube: Search Algorithms (Video)
            </a>
            <p>A video tutorial explaining how search algorithms like linear and binary search work with clear examples.</p>
          </li>
          <li>
            <a href="https://cp-algorithms.com/searching/" target="_blank" rel="noopener noreferrer">
              CP-Algorithms: Searching Algorithms
            </a>
            <p>An in-depth look at search algorithms commonly used in competitive programming.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SearchPage;
