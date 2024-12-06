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

// Enlaces de documentación (puedes actualizar las URLs según tus recursos)
const documentationLinks: { [key: string]: { name: string; url: string } } = {
  'sorting-and-search': {
    name: 'Algoritmos de Ordenamiento y Búsqueda',
    url: 'https://github.com/tu_usuario/tu_repositorio/documentacion/ordenamiento-busqueda.md',
  },
  'dynamic-programming': {
    name: 'Programación Dinámica',
    url: 'https://github.com/tu_usuario/tu_repositorio/documentacion/programacion-dinamica.md',
  },
  'greedy': {
    name: 'Algoritmos Greedy',
    url: 'https://github.com/tu_usuario/tu_repositorio/documentacion/greedy.md',
  },
  'computational-geometry': {
    name: 'Geometría Computacional',
    url: 'https://github.com/tu_usuario/tu_repositorio/documentacion/geometria-computacional.md',
  },
  'graph-algorithms': {
    name: 'Algoritmos en Grafos',
    url: 'https://github.com/tu_usuario/tu_repositorio/documentacion/algoritmos-grafos.md',
  },
  'flow-algorithms': {
    name: 'Flujos en Grafos',
    url: 'https://github.com/tu_usuario/tu_repositorio/documentacion/flujos-grafos.md',
  },
};

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
        return <div>Selecciona un tema de la barra lateral para ver el contenido.</div>;
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
              <li onClick={() => setSelectedTopic('graph-algorithms')}>Algoritmos en Grafos</li>
              <li onClick={() => setSelectedTopic('flow-algorithms')}>Flujos en Grafos</li>
            </ul>
          )}
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        {renderContent()}

        {/* Sección de Documentación Siempre Desplegable */}
        {selectedTopic && documentationLinks[selectedTopic] && (
          <div className="documentation-section">
            <h3>Documentación de {documentationLinks[selectedTopic].name}</h3>
            <div className="documentation-content">
              <p>Esta sección contiene la explicación del tema correspondiente.</p>
              <a href={documentationLinks[selectedTopic].url} target="_blank" rel="noopener noreferrer">
                Ver documentación en GitHub
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
