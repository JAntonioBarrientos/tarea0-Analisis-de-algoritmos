import React from 'react';

const BacktrackingPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Backtracking Algorithms</h1>

      <section className="introduction">
        <p>Backtracking is a technique for solving problems recursively by building a solution incrementally and removing solutions that fail to meet the conditions. It is often used in constraint satisfaction problems like Sudoku and the N-Queens problem.</p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/backtracking-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Backtracking Algorithms
            </a>
            <p>An introduction to various backtracking algorithms with problem examples like N-Queens and Sudoku.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=DKCbsiDBN6c" target="_blank" rel="noopener noreferrer">
              YouTube: Backtracking Algorithms (Video)
            </a>
            <p>A video tutorial explaining how backtracking works with detailed examples.</p>
          </li>
          <li>
            <a href="https://cp-algorithms.com/algebra/backtracking.html" target="_blank" rel="noopener noreferrer">
              Competitive Programming Algorithms: Backtracking
            </a>
            <p>A practical guide to applying backtracking in competitive programming scenarios.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BacktrackingPage;
