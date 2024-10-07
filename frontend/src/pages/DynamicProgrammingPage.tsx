import React from 'react';

const DynamicProgrammingPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Dynamic Programming</h1>

      <section className="introduction">
        <p>Dynamic programming is a method for solving complex problems by breaking them into simpler subproblems and storing the results of these subproblems to avoid redundant computations. It is commonly used in optimization problems.</p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/dynamic-programming/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Dynamic Programming
            </a>
            <p>A comprehensive guide to dynamic programming problems and techniques, including memoization and tabulation.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=oBt53YbR9Kk" target="_blank" rel="noopener noreferrer">
              YouTube: Dynamic Programming for Beginners (Video)
            </a>
            <p>A beginner-friendly video tutorial that explains dynamic programming with real-world examples.</p>
          </li>
          <li>
            <a href="https://leetcode.com/tag/dynamic-programming/" target="_blank" rel="noopener noreferrer">
              LeetCode: Dynamic Programming Problems
            </a>
            <p>A collection of dynamic programming problems on LeetCode, useful for interview preparation.</p>
          </li>
          <li>
            <a href="https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction/" target="_blank" rel="noopener noreferrer">
              HackerEarth: Dynamic Programming Practice
            </a>
            <p>Practice dynamic programming with hands-on problems and challenges.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DynamicProgrammingPage;
