import React from 'react';

const DivideAndConquerPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Divide and Conquer Algorithms</h1>

      <section className="introduction">
        <p>Divide and conquer is a strategy for solving complex problems by breaking them down into smaller subproblems, solving those subproblems independently, and then combining their results to solve the original problem. It is widely used in sorting algorithms and recursive solutions.</p>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/divide-and-conquer/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Divide and Conquer Algorithms
            </a>
            <p>A detailed introduction to divide and conquer algorithms with examples like Merge Sort and Quick Sort.</p>
          </li>
          <li>
            <a href="https://www.programiz.com/dsa/divide-and-conquer" target="_blank" rel="noopener noreferrer">
              Programiz: Divide and Conquer Approach
            </a>
            <p>An overview of divide and conquer techniques used in problem-solving and their common applications.</p>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ENyox7kNKeY" target="_blank" rel="noopener noreferrer">
              YouTube: Divide and Conquer (Video)
            </a>
            <p>A YouTube video explaining the divide and conquer method with practical examples.</p>
          </li>
          <li>
            <a href="https://www.hackerearth.com/practice/algorithms/searching/binary-search/tutorial/" target="_blank" rel="noopener noreferrer">
              HackerEarth: Binary Search in Divide and Conquer
            </a>
            <p>Learn how binary search is implemented using the divide and conquer approach with example problems.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DivideAndConquerPage;
