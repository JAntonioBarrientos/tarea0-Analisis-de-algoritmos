import React from 'react';

const SortingPage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Título de la página */}
      <h1>Sorting Algorithms</h1>

      {/* Introducción */}
      <section className="introduction">
        <p>Sorting algorithms are fundamental techniques for organizing data. They are used to arrange elements in a specific order, such as numerical or lexicographical. Understanding sorting algorithms is crucial for optimizing performance in various applications.</p>
      </section>

      {/* Lista de recursos */}
      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Comprehensive Guide to Sorting Algorithms
            </a>
            <p>A detailed explanation of common sorting algorithms with examples and time complexity analysis.</p>
          </li>
          <li>
            <a href="https://www.toptal.com/developers/sorting-algorithms" target="_blank" rel="noopener noreferrer">
              Toptal: Sorting Algorithm Animations
            </a>
            <p>Interactive animations and explanations of different sorting algorithms.</p>
          </li>
          <li>
            <a href="https://visualgo.net/en/sorting" target="_blank" rel="noopener noreferrer">
              VisuAlgo: Visualize Sorting Algorithms
            </a>
            <p>Tool for visualizing and understanding the behavior of sorting algorithms step-by-step.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=pkkFqlG0Hds" target="_blank" rel="noopener noreferrer">
              YouTube: Sorting Algorithms (Video)
            </a>
            <p>A YouTube video tutorial that walks through various sorting algorithms with clear explanations.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SortingPage;
