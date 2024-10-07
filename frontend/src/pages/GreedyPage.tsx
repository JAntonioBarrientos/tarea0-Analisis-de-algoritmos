import React from 'react';

const GreedyPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Greedy Algorithms</h1>

      <section className="introduction">
        <p>Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. This approach is used in optimization problems where the best immediate choice is selected without considering the broader consequences. Common problems solved by greedy algorithms include the coin change problem, Huffman coding, and activity selection.</p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/greedy-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Greedy Algorithms
            </a>
            <p>An introduction to greedy algorithms with detailed explanations of popular problems like the coin change problem and Kruskal's algorithm.</p>
          </li>
          <li>
            <a href="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/" target="_blank" rel="noopener noreferrer">
              HackerEarth: Greedy Algorithms Tutorial
            </a>
            <p>A step-by-step guide to understanding greedy algorithms and how to apply them to solve optimization problems.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ARjhI_5U9Wc" target="_blank" rel="noopener noreferrer">
              YouTube: Greedy Algorithm (Video)
            </a>
            <p>A video tutorial that explains the basics of greedy algorithms and their real-world applications.</p>
          </li>
          <li>
            <a href="https://cp-algorithms.com/greedy/" target="_blank" rel="noopener noreferrer">
              CP-Algorithms: Greedy Algorithms
            </a>
            <p>A collection of greedy algorithm examples used in competitive programming, such as Huffman coding and activity selection.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default GreedyPage;
