// src/App.tsx
import React, { useState } from 'react';
import './App.css';

// Importa los componentes de cada tema
import SortingAndSearch from './components/SortingAndSearch';
import DynamicProgramming from './components/DynamicProgramming';
import Greedy from './components/Greedy';
import ComputationalGeometry from './components/ComputationalGeometry';
import GraphAlgorithms from './components/GraphAlgorithms';
import FlowAlgorithms from './components/FlowAlgorithms';


const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Función para capitalizar la primera letra
  const capitalize = (s: string) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  // Renderiza el componente seleccionado
  const renderContent = () => {
    switch (selectedTopic) {
      case 'sorting-and-search':
        return <SortingAndSearch />;
      case 'dynamic-programming':
        return <DynamicProgramming />;
      case 'greedy':
        return <Greedy />;
      case 'computational-geometry':
        return <ComputationalGeometry />;
      case 'graph-algorithms':
        return <GraphAlgorithms />;
      case 'flow-algorithms':
        return <FlowAlgorithms />;
      default:
        return <div>
          <h2>Recursos generales para algoritmos:</h2>
          <ul>
            <li>
              <strong>Donald E. Knuth</strong>
              <ul>
                <li><em>The Art of Computer Programming, Volumes 1-3</em></li>
                <li>Volumen 1: Fundamental Algorithms</li>
                <li>Volumen 2: Seminumerical Algorithms</li>
                <li>Volumen 3: Sorting and Searching</li>
                <li>Editorial: Addison-Wesley</li>
              </ul>
            </li>
            <li>
              <strong>Robert Sedgewick</strong>
              <ul>
                <li><em>Algorithms</em></li>
                <li>Editorial: Addison-Wesley</li>
              </ul>
            </li>
            <li>
              <strong>Jon Kleinberg y Éva Tardos</strong>
              <ul>
                <li><em>Algorithm Design</em></li>
                <li>Editorial: Pearson</li>
              </ul>
            </li>
            <li>
              <strong>Steven S. Skiena</strong>
              <ul>
                <li><em>The Algorithm Design Manual</em></li>
                <li>Editorial: Springer</li>
              </ul>
            </li>
            <li>
              <strong>Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein</strong>
              <ul>
                <li><em>Introduction to Algorithms</em></li>
                <li>Editorial: MIT Press</li>
              </ul>
            </li>
            <li>
              <strong>Michael T. Goodrich y Roberto Tamassia</strong>
              <ul>
                <li><em>Algorithm Design and Applications</em></li>
                <li>Editorial: Wiley</li>
              </ul>
            </li>
          </ul>
        </div>;
    }
  };

  return (
    <div className="app">
      {/* Barra lateral */}
      <aside className="sidebar">
        <h2>Temas de Algoritmos</h2>
        
        {/* Categoría de Algoritmos */}
        <div className="category">
          <div
            className="category-header"
            onClick={() => setExpandedCategory(expandedCategory === 'algorithms' ? null : 'algorithms')}
          >
            Algoritmos
          </div>
          {expandedCategory === 'algorithms' && (
            <ul>
              <li onClick={() => setSelectedTopic('sorting-and-search')}>Ordenamiento y Búsqueda</li>
              <li onClick={() => setSelectedTopic('dynamic-programming')}>Programación Dinámica</li>
              <li onClick={() => setSelectedTopic('greedy')}>Greedy</li>
              <li onClick={() => setSelectedTopic('computational-geometry')}>Geometría Computacional</li>
              <li onClick={() => setSelectedTopic('graph-algorithms')}>Algoritmos en Gráficas</li>
              <li onClick={() => setSelectedTopic('flow-algorithms')}>Flujos en redes</li>
            </ul>
          )}
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
