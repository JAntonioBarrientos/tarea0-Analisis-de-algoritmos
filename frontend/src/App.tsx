import React from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();  // Hook para la navegación de React Router

  return (
    <div className="app-container">
      {/* Encabezado */}
      <header className="app-header">
        <h1>Welcome to My Algorithm Web App Collection</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#algorithms">Algorithms</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="app-main">
        <section id="home">
          <h2>Home</h2>
          <p>Welcome to the Algorithm Web App! This platform offers resources and explanations on a variety of algorithms to help you understand and apply them.</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>This web app is dedicated to helping developers and students learn about different algorithm types, their uses, and implementations in real-world scenarios.</p>
        </section>

        {/* Sección de Algoritmos */}
        <section id="algorithms">
          <h2>Algorithms</h2>
          <p>Explore the different types of algorithms we cover:</p>

          <h3>Sorting Algorithms</h3>
          <p>Sorting algorithms arrange elements in a particular order, commonly used in data organization.</p>
          <button onClick={() => navigate('/sorting')}>Learn More</button>

          <h3>Search Algorithms</h3>
          <p>Search algorithms help find specific data within a data structure.</p>
          <button onClick={() => navigate('/search')}>Learn More</button>

          <h3>Graph Algorithms</h3>
          <p>Graph algorithms handle structures of nodes and edges, solving problems related to shortest paths, spanning trees, and more.</p>
          <button onClick={() => navigate('/graph')}>Learn More</button>

          <h3>Dynamic Programming</h3>
          <p>Dynamic programming is a method for solving complex problems by breaking them into simpler subproblems.</p>
          <button onClick={() => navigate('/dynamic-programming')}>Learn More</button>

          <h3>Greedy Algorithms</h3>
          <p>Greedy algorithms make the optimal choice at each step, hoping to find the global optimum.</p>
          <button onClick={() => navigate('/greedy')}>Learn More</button>

          <h3>Backtracking Algorithms</h3>
          <p>Backtracking is used to solve problems recursively by trying to build a solution incrementally.</p>
          <button onClick={() => navigate('/backtracking')}>Learn More</button>

          <h3>Divide and Conquer Algorithms</h3>
          <p>Divide and conquer breaks a problem into smaller subproblems recursively.</p>
          <button onClick={() => navigate('/divide-and-conquer')}>Learn More</button>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="app-footer">
        <p>&copy; 2024 My Algorithm Web App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
