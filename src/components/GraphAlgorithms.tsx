import React from 'react';
import './Graphs.css';

const Graphs: React.FC = () => {
  // Lista de videos de YouTube con sus títulos y URLs estándar
  const youtubeVideos = [
    {
      title: '5.1 Graph Traversals - BFS & DFS - Breadth First Search and Depth First Search',
      url: 'https://www.youtube.com/watch?v=pcKY4hjDrxk',
    },
    {
      title: 'Breadth First Search Algorithm | Shortest Path | Graph Theory',
      url: 'https://www.youtube.com/watch?v=oDqjPvD54Ss',
    },
    {
      title: 'Breadth First Search (BFS): Visualized and Explained',
      url: 'https://www.youtube.com/watch?v=xlVX7dXLS64',
    },
    {
      title: 'Algorithms Course - Graph Theory Tutorial from a Google Engineer',
      url: 'https://www.youtube.com/watch?v=09_LlHjoEiY',
    },
    {
      title: 'Graph Algorithms Crash Course (with Java)',
      url: 'https://www.youtube.com/watch?v=dS44jZyj5gU',
    },
    {
      title: "Dijkstra's Algorithm - Computerphile",
      url: 'https://www.youtube.com/watch?v=GazC3A4OQTE',
    },
    {
      title: "Prim's algorithm in 2 minutes",
      url: 'https://www.youtube.com/watch?v=cplfcGZmX7I',
    },
    {
      title: "Kruskal's algorithm in 2 minutes",
      url: 'https://www.youtube.com/watch?v=71UQH7Pr9kU',
    },
    {
      title: "Prim's Minimum Spanning Tree Algorithm | Graph Theory",
      url: 'https://www.youtube.com/watch?v=jsmMtJpPnhU',
    },
    {
      title: 'Topological Sort Algorithm | Graph Theory',
      url: 'https://www.youtube.com/watch?v=eL-KzMXSXXI',
    },
  ];

  // Lista de páginas web con sus títulos y URLs
  const webResources = [
    {
      title: 'W3Schools: DSA Graphs',
      url: 'https://www.w3schools.com/dsa/dsa_theory_graphs.php?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'Educative.io: Algorithms 101: How to Use Graph Algorithms',
      url: 'https://www.educative.io/blog/graph-algorithms-tutorial?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'HackerEarth: Graph Representation',
      url: 'https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'Stanford University: Basic Graph Algorithms',
      url: 'https://web.stanford.edu/class/cs97si/06-basic-graph-algorithms.pdf?utm_source=chatgpt.com',
      highlighted: true, // Enfatizamos esta página
    },
  ];

  // Función para extraer el ID del video de una URL estándar de YouTube
  const getVideoId = (watchUrl: string): string | null => {
    try {
      const urlObj = new URL(watchUrl);
      return urlObj.searchParams.get('v');
    } catch (error) {
      console.error('URL inválida:', watchUrl);
      return null;
    }
  };

  return (
    <div className="topic-content">
      <h2>Algoritmos de Gráficas</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los <strong>algoritmos de gráficas</strong> son esenciales en la computación para resolver problemas relacionados con redes, rutas, y estructuras interconectadas. Permiten analizar y optimizar rutas, conexiones, y flujos en diversas aplicaciones como redes de telecomunicaciones, transporte, y más.
        </p>
      </section>

      <section>
        <h3>Recursos</h3>
        
        <div className="resources-section">
          
          {/* Páginas Web */}
          <div className="resource-category">
            <h4>Páginas Web</h4>
            <ul>
              {webResources.map((resource, index) => (
                <li key={index} className={resource.highlighted ? 'highlighted-link' : ''}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
            {webResources.some(resource => resource.highlighted)}
          </div>
          
          {/* Videos de YouTube */}
          <div className="resource-category">
            <h4>Videos de YouTube</h4>
            <div className="youtube-videos">
              {youtubeVideos.map((video, index) => {
                const videoId = getVideoId(video.url);
                const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';
                return (
                  <div className="youtube-video" key={index}>
                    <p>{video.title}</p>
                    {embedUrl ? (
                      <iframe
                        width="100%"
                        height="200"
                        src={embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p>URL de video inválida.</p>
                    )}
                    {videoId && (
                      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                        Ver Video
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Graphs;
