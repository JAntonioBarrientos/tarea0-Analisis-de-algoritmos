
import React from 'react';
import './DynamicProgramming.css';

const DynamicProgramming: React.FC = () => {
  // Lista de videos de YouTube con sus títulos y URLs embebidos
  const youtubeVideos = [
    {
      title: 'What Is Dynamic Programming and How To Use It',
      url: 'https://www.youtube.com/embed/vYquumk4nWw',
    },
    {
      title: '5 Simple Steps for Solving Dynamic Programming Problems',
      url: 'https://www.youtube.com/embed/aPQY__2H3tE',
    },
    {
      title: 'Mastering Dynamic Programming - How to solve any interview problem (Part 1)',
      url: 'https://www.youtube.com/embed/Hdr64lKQ3e4',
    },
    {
      title: 'Bottom Up vs Top Down Dynamic Programming vs Recursion | Fibonacci Sequence',
      url: 'https://www.youtube.com/embed/M-NeO_9BU_A',
    },
    {
      title: 'Algorithms: Memoization and Dynamic Programming',
      url: 'https://www.youtube.com/embed/P8Xa2BitN3I',
    },
  ];

  // Función para extraer el ID del video embebido
  const getVideoId = (embedUrl: string): string | null => {
    const parts = embedUrl.split('/embed/');
    return parts.length > 1 ? parts[1].split('?')[0] : null;
  };

  return (
    <div className="topic-content">
      <h2>Programación Dinámica</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          La <strong>programación dinámica</strong> es una técnica de diseño de algoritmos que resuelve problemas complejos dividiéndolos en subproblemas más simples. Se utiliza cuando los subproblemas se solapan y se puede almacenar sus soluciones para evitar cálculos redundantes, mejorando así la eficiencia.
        </p>
      </section>

      <section>
        <h3>Recursos</h3>
        
        <div className="resources-section">
          
          {/* Videos de YouTube */}
          <div className="resource-category">
            <h4>Videos de YouTube</h4>
            <div className="youtube-videos">
              {youtubeVideos.map((video, index) => {
                const videoId = getVideoId(video.url);
                return (
                  <div className="youtube-video" key={index}>
                    <p>{video.title}</p>
                    <iframe
                      width="100%"
                      height="200"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
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
          
          {/* Páginas Web */}
          <div className="resource-category">
            <h4>Páginas Web</h4>
            <ul>
              <li>
                <a href="https://www.geeksforgeeks.org/dynamic-programming/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  GeeksforGeeks: Dynamic Programming
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.blog/2022/01/31/the-complete-beginners-guide-to-dynamic-programming/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  Stack Overflow Blog: The Complete Beginner's Guide to Dynamic Programming
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/complete-guide-to-dynamic-programming/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  GeeksforGeeks: Complete Guide to Dynamic Programming
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/dsa/dsa_ref_dynamic_programming.php?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  W3Schools: DSA Dynamic Programming
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  freeCodeCamp: Dynamic Programming for Beginners
                </a>
              </li>
              <li className="highlighted-link">
                <a href="https://thelinuxcode.com/dynamic-programming-made-easy-for-beginners/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  TheLinuxCode: Dynamic Programming Made Easy for Beginners
                </a>
              </li>
              {/* Añade más páginas web si es necesario */}
            </ul>
            
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default DynamicProgramming;
