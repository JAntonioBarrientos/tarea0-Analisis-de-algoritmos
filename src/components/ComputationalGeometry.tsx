import React from 'react';
import './ComputationalGeometry.css';

const ComputationalGeometry: React.FC = () => {
  // Lista de videos de YouTube con sus títulos y URLs estándar
  const youtubeVideos = [
    {
      title: 'Convex Hull Algorithms',
      url: 'https://www.youtube.com/watch?v=fTqPVjy0rzU',
    },
    {
      title: 'Plane Sweep Algorithm for finding Line Segment Intersections',
      url: 'https://www.youtube.com/watch?v=0mwScBSTHB4',
    },
    {
      title: 'Doubly-connected edge lists for planar subdivisions',
      url: 'https://www.youtube.com/watch?v=QGdv1DCLhIQ',
    },
    {
      title: 'Polygon Triangulation, Art Gallery Problem',
      url: 'https://www.youtube.com/watch?v=pmVn5KylI1Q',
    },
    {
      title: 'Vertical decomposition for point locations, part 1: the data structure',
      url: 'https://www.youtube.com/watch?v=UP1PLhlhs9w',
    },
    {
      title: 'Vertical decomposition for point locations, part 2: randomized incremental construction',
      url: 'https://www.youtube.com/watch?v=3d5n765Twfk',
    },
  ];

  // Lista de páginas web con sus títulos y URLs
  const webResources = [
    {
      title: 'GeeksforGeeks: Computational Geometry – Algorithms for Geometry',
      url: 'https://www.geeksforgeeks.org/what-is-computational-geometry-and-how-is-it-applied-in-solving-geometric-problems/?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'MIT OpenCourseWare: Computational Geometry (2.158J)',
      url: 'https://ocw.mit.edu/courses/2-158j-computational-geometry-spring-2003/?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'Stanford University: Basic Algorithms and Combinatorics in Computational Geometry',
      url: 'https://graphics.stanford.edu/courses/cs164-09-spring/Handouts/basic.pdf?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'University of Oxford: Computational Geometry Lecture Notes',
      url: 'https://www.robots.ox.ac.uk/~ian/Teaching/CompGeom/lec1.pdf?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'MIT OpenCourseWare: Design and Analysis of Algorithms (6.046J) – Lecture 23: Computational Geometry',
      url: 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2012/resources/mit6_046js12_lec23/?utm_source=chatgpt.com',
      highlighted: false,
    },
    {
      title: 'University of Central Florida: Basics of Computational Geometry',
      url: 'https://www.cs.ucf.edu/~dmarino/progcontests/cop4516/notes/Geometry-Nadeem.pdf?utm_source=chatgpt.com',
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
      <h2>Geometría Computacional</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          La <strong>geometría computacional</strong> es una rama de la informática que estudia algoritmos para resolver problemas geométricos. Es fundamental en áreas como gráficos por computadora, diseño asistido por computadora (CAD), y análisis de datos espaciales.
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

export default ComputationalGeometry;
