import React from 'react';
import './Greedy.css';
const Greedy: React.FC = () => {
  // Lista de videos de YouTube con sus títulos y URLs estándar
  const youtubeVideos = [
    {
      title: 'Greedy Algorithms Explained',
      url: 'https://www.youtube.com/watch?v=lfQvPHGtu6Q',
    },
    {
      title: 'Introduction to Greedy Algorithms | GeeksforGeeks',
      url: 'https://www.youtube.com/watch?v=HzeK7g8cD0Y',
    },
    {
      title: 'Greedy Algorithms Tutorial – Solve Coding Challenges',
      url: 'https://www.youtube.com/watch?v=bC7o8P_Ste4',
    },
    {
      title: '3. Greedy Method - Introduction',
      url: 'https://www.youtube.com/watch?v=ARvQcqJ_-NY',
    },
    {
      title: 'Dynamic Programming vs Greedy Methods & Brute Force | Coin Change Problem (DPV 6.17)',
      url: 'https://www.youtube.com/watch?v=sdIQEUvlfBU',
    },
  ];

  // Función para extraer el ID del video de una URL estándar de YouTube
  const getVideoId = (watchUrl: string): string | null => {
    const urlObj = new URL(watchUrl);
    return urlObj.searchParams.get('v');
  };

  return (
    <div className="topic-content">
      <h2>Algoritmos Greedy (Voraces)</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los <strong>algoritmos Greedy (voraces)</strong> son una técnica de diseño de algoritmos que toman decisiones óptimas en cada paso con la esperanza de encontrar una solución globalmente óptima. Se utilizan en problemas donde una solución localmente óptima conduce a una solución global óptima.
        </p>
      </section>

      <section>
        <h3>Recursos</h3>
        
        <div className="resources-section">
          
          {/* Páginas Web */}
          <div className="resource-category">
            <h4>Páginas Web</h4>
            <ul>
              <li>
                <a href="https://www.geeksforgeeks.org/introduction-to-greedy-algorithm-data-structures-and-algorithm-tutorials/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  GeeksforGeeks: Introduction to Greedy Algorithm
                </a>
              </li>
              <li>
                <a href="https://www.tutorialspoint.com/data_structures_algorithms/greedy_algorithms.htm?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  TutorialsPoint: Greedy Algorithms
                </a>
              </li>
              <li>
                <a href="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  HackerEarth: Basics of Greedy Algorithms
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/dsa/dsa_ref_greedy.php?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  W3Schools: DSA Greedy Algorithms
                </a>
              </li>
              <li className="highlighted-link">
                <a href="https://web.stanford.edu/class/archive/cs/cs161/cs161.1138/handouts/120%20Guide%20to%20Greedy%20Algorithms.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  Stanford University: Guide to Greedy Algorithms
                </a>
              </li>
            </ul>
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

export default Greedy;
