import React from 'react';
import './FlowAlgorithms.css'; 
const FlowAlgorithms: React.FC = () => {
  // Lista de videos de YouTube con sus títulos y URLs estándar
  const youtubeVideos = [
    {
      title: 'Max Flow Ford Fulkerson | Network Flow | Graph Theory',
      url: 'https://www.youtube.com/watch?v=pcKY4hjDrxk',
    },
    {
      title: 'Max Flow Ford Fulkerson | Source Code',
      url: 'https://www.youtube.com/watch?v=Xu8jjJnwvxE',
    },
    {
      title: 'Unweighted Bipartite Matching | Network Flow | Graph Theory',
      url: 'https://www.youtube.com/watch?v=GhjwOiJ4SqU',
    },
    {
      title: 'Bipartite Matching | Mice and Owls problem | Network Flow | Graph Theory',
      url: 'https://www.youtube.com/watch?v=ar6x7dHfGHA',
    },
    {
      title: "Edmonds Karp Algorithm | Network Flow | Graph Theory",
      url: 'https://www.youtube.com/watch?v=RppuJYwlcI8',
    },
    {
      title: "Edmonds Karp Algorithm | Network Flow | Graph Theory",
      url: 'https://www.youtube.com/watch?v=RppuJYwlcI8',
    },
    {
      title: "Edmonds Karp Algorithm | Source Code",
      url: 'https://www.youtube.com/watch?v=OViaWp9Q-Oc',
    },
    {
      title: "Dinic's Algorithm | Network Flow | Graph Theory",
      url: 'https://www.youtube.com/watch?v=M6cm8UeeziI',
    },
    {
      title: "Dinic's Algorithm | Network Flow | Source Code",
      url: 'https://www.youtube.com/watch?v=_SdF4KK_dyM',
    },
  ];

  // Lista de páginas web con sus títulos y URLs
  const webResources = [
    {
      title: 'GeeksforGeeks: Ford-Fulkerson Algorithm for Maximum Flow Problem',
      url: 'https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'MIT OpenCourseWare: Lecture 13 - Network Flow',
      url: 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2012/7c2927794e61bd70c14c07728fa54375_MIT6_046JS12_lec13.pdf?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'MIT OpenCourseWare: Network Flows Lecture Notes',
      url: 'https://ocw.mit.edu/courses/6-854j-advanced-algorithms-fall-2008/resources/notes_flow/?utm_source=chatgpt.com',
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
      <h2>Algoritmos de Flujo (Flow Algorithms)</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los <strong>algoritmos de flujo</strong> son fundamentales en la teoría de gráficas y la optimización. Se utilizan para resolver problemas relacionados con el flujo máximo en redes, asignaciones y emparejamientos. Estos algoritmos son esenciales en áreas como redes de telecomunicaciones, transporte, logística y más.
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

export default FlowAlgorithms;
