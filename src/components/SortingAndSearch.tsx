import React from 'react';
import './SortingAndSearch.css';

const SortingAndSearch: React.FC = () => {
  // Lista de videos de YouTube con sus títulos y URLs
  const youtubeVideos = [
    {
      title: '10 Sorting Algorithms Easily Explained',
      url: 'https://www.youtube.com/embed/rbbTd-gkajw',
    },
    {
      title: 'Quick Sort Tutorial',
      url: 'https://www.youtube.com/embed/RfXt_qHDEPw',
    },
    {
      title: '15 Sorting Algorithms in 6 Minutes',
      url: 'https://www.youtube.com/embed/kPRA0W1kECg',
    },
    {
      title: 'Heap Sort Algorithm',
      url: 'https://www.youtube.com/embed/l7-f9gS8VOs',
    },
    {
      title: 'Understanding Sorting Algorithms',
      url: 'https://www.youtube.com/embed/3j0SWDX4AtU',
    },
    {
      title: 'Binary Search Algorithm - Computerphile',
      url: 'https://www.youtube.com/embed/hDn8iOc30Tk',
    },
    {
      title: 'Visualization of 24 Sorting Algorithms',
      url: 'https://www.youtube.com/embed/BeoCbJPuvSE',
    },
    {
      title: 'Getting Sorted & Big O Notation',
      url: 'https://www.youtube.com/embed/kgBjXUE_Nwc',
    },
  ];

  return (
    <div className="topic-content">
      <h2>Algoritmos de Ordenamiento y Búsqueda</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los <strong>algoritmos de ordenamiento y búsqueda</strong> son fundamentales en las ciencias de la computación y el análisis de algoritmos. Permiten organizar y localizar datos de manera eficiente, lo cual es crucial para el rendimiento de las aplicaciones y sistemas.
        </p>
      </section>

      <section>
        <h3>Recursos</h3>
        
        <div className="resources-section">
          
          {/* Videos de YouTube */}
          <div className="resource-category">
            <h4>Videos de YouTube</h4>
            <div className="youtube-videos">
              {youtubeVideos.map((video, index) => (
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
                  <a href={`https://www.youtube.com/watch?v=${video.url.split('v=')[1]}`} target="_blank" rel="noopener noreferrer">
                    Ver Video
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Páginas Web */}
          <div className="resource-category">
            <h4>Páginas Web</h4>
            <ul>
              <li>
                <a href="https://www.geeksforgeeks.org/introduction-to-sorting-algorithm/" target="_blank" rel="noopener noreferrer">
                  Introducción a los Algoritmos de Ordenamiento - GeeksforGeeks
                </a>
              </li>
              <li>
                <a href="https://www.programiz.com/dsa/sorting-algorithm" target="_blank" rel="noopener noreferrer">
                  Algoritmos de Ordenamiento - Programiz
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/dsa/index.php" target="_blank" rel="noopener noreferrer">
                  Estructuras de Datos y Algoritmos - W3Schools
                </a>
              </li>
              <li>
                <a href="https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm" target="_blank" rel="noopener noreferrer">
                  Algoritmos de Ordenamiento - TutorialsPoint
                </a>
              </li>
              <li className="highlighted-link">
                <a href="https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/" target="_blank" rel="noopener noreferrer">
                  Lecture 12: Searching and Sorting - MIT OpenCourseWare
                </a>
              </li>
              <li>
                <a href="https://algorithmsin60days.com/blog/intro-to-searching-and-sorting-algos/" target="_blank" rel="noopener noreferrer">
                  Introducción a Algoritmos de Búsqueda y Ordenamiento - Algorithms in 60 Days
                </a>
              </li>
              <li>
                <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" rel="noopener noreferrer">
                  CS50: Introducción a la Ciencia de la Computación - Harvard
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default SortingAndSearch;
