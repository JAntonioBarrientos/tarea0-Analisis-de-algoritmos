import React from 'react';

const SortingAndSearch: React.FC = () => {
  return (
    <div className="topic-content">
      <h2>Algoritmos de Ordenamiento y Búsqueda</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los algoritmos de ordenamiento y búsqueda son fundamentales en la informática y el análisis de algoritmos. Estos algoritmos permiten organizar y encontrar datos de manera eficiente, lo cual es crucial para el rendimiento de las aplicaciones.
        </p>
      </section>

      <section>
        <h3>Algoritmos de Ordenamiento</h3>
        <ul>
          <li><strong>Bubble Sort:</strong> Un algoritmo simple que compara y intercambia elementos adyacentes si están en el orden incorrecto.</li>
          <li><strong>Quick Sort:</strong> Un algoritmo eficiente que utiliza el enfoque de divide y vencerás para ordenar elementos.</li>
          <li><strong>Merge Sort:</strong> Otro algoritmo de divide y vencerás que divide el array en subarrays, los ordena y luego los fusiona.</li>
          <li><strong>Heap Sort:</strong> Utiliza una estructura de datos llamada heap para ordenar los elementos.</li>
        </ul>
      </section>

      <section>
        <h3>Algoritmos de Búsqueda</h3>
        <ul>
          <li><strong>Binary Search:</strong> Un método eficiente para encontrar un elemento en una lista ordenada dividiendo el espacio de búsqueda a la mitad en cada paso.</li>
          <li><strong>Linear Search:</strong> Un método sencillo que verifica cada elemento de la lista secuencialmente hasta encontrar el objetivo.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplos de Código</h3>
        <h4>Bubble Sort en JavaScript</h4>
        <pre>
{`function bubbleSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n-1; i++) {
    for(let j = 0; j < n-i-1; j++) {
      if(arr[j] > arr[j+1]) {
        // Intercambiar
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));`}
        </pre>

        <h4>Binary Search en Python</h4>
        <pre>
{`def binary_search(arr, target):
    left, right = 0, len(arr) -1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid +1
        else:
            right = mid -1
    return -1

array = [2, 3, 4, 10, 40]
target = 10

result = binary_search(array, target)
if result != -1:
    print("Elemento encontrado en el índice:", result)
else:
    print("Elemento no encontrado")`}
        </pre>
      </section>

      <section>
        <h3>Recursos Adicionales</h3>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/Ordenamiento" target="_blank" rel="noopener noreferrer">
              Wikipedia: Ordenamiento
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Sorting Algorithms
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ZZuD6iUOXDE" target="_blank" rel="noopener noreferrer">
              Video: Sorting Algorithms Animated
            </a>
          </li>
          <li>
            <a href="https://visualgo.net/en/sorting" target="_blank" rel="noopener noreferrer">
              Visualgo: Visualización de Algoritmos de Ordenamiento
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Diagramas y Visualizaciones</h3>
        <p>
          Puedes utilizar herramientas como <a href="https://visualgo.net/en/sorting" target="_blank" rel="noopener noreferrer">Visualgo</a> para visualizar cómo funcionan los diferentes algoritmos de ordenamiento y búsqueda.
        </p>
        <img src="https://visualgo.net/en/sorting" alt="Visualización de Algoritmos de Ordenamiento" style={{ width: '100%', maxWidth: '600px' }} />
      </section>
    </div>
  );
};

export default SortingAndSearch;
