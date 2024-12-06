// src/components/DynamicProgramming.tsx
import React from 'react';

const DynamicProgramming: React.FC = () => {
  return (
    <div className="topic-content">
      <h2>Programación Dinámica</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          La programación dinámica es una técnica de diseño de algoritmos que resuelve problemas complejos dividiéndolos en subproblemas más simples. Se utiliza cuando los subproblemas se solapan y se puede almacenar sus soluciones para evitar cálculos redundantes.
        </p>
      </section>

      <section>
        <h3>Conceptos Clave</h3>
        <ul>
          <li><strong>Subestructura Óptima:</strong> Una solución óptima del problema contiene soluciones óptimas de sus subproblemas.</li>
          <li><strong>Memorización:</strong> Almacenar los resultados de los subproblemas ya resueltos para evitar recalculaciones.</li>
          <li><strong>Tabulación:</strong> Resolver los subproblemas en orden y almacenar sus soluciones en una tabla.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplos Comunes</h3>
        <ul>
          <li><strong>Problema de la Mochila (Knapsack Problem):</strong> Determinar la combinación de objetos que maximiza el valor sin exceder la capacidad de la mochila.</li>
          <li><strong>Secuencia de Fibonacci:</strong> Calcular el enésimo número de Fibonacci de manera eficiente.</li>
          <li><strong>Problema de la Cadena de Matrices (Matrix Chain Multiplication):</strong> Encontrar la secuencia óptima de multiplicación de matrices.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplo de Código: Secuencia de Fibonacci en Python</h3>
        <pre>
{`# Programación Dinámica con Tabulación
def fibonacci(n):
    fib = [0, 1]
    for i in range(2, n+1):
        fib.append(fib[i-1] + fib[i-2])
    return fib[n]

print(fibonacci(10))  # Salida: 55`}
        </pre>

        <h4>Versión con Memorización</h4>
        <pre>
{`# Programación Dinámica con Memorización
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

print(fibonacci_memo(10))  # Salida: 55`}
        </pre>
      </section>

      <section>
        <h3>Recursos Adicionales</h3>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/Programaci%C3%B3n_din%C3%A1mica" target="_blank" rel="noopener noreferrer">
              Wikipedia: Programación Dinámica
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/dynamic-programming/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Dynamic Programming
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=OQ5jsbhAv_M" target="_blank" rel="noopener noreferrer">
              Video: Introducción a la Programación Dinámica
            </a>
          </li>
          <li>
            <a href="https://visualgo.net/en/dp" target="_blank" rel="noopener noreferrer">
              Visualgo: Visualización de Programación Dinámica
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Diagramas y Visualizaciones</h3>
        <p>
          Para entender mejor cómo funcionan los algoritmos de programación dinámica, puedes utilizar herramientas como <a href="https://visualgo.net/en/dp" target="_blank" rel="noopener noreferrer">Visualgo</a>.
        </p>
        <img src="https://visualgo.net/en/dp" alt="Visualización de Programación Dinámica" style={{ width: '100%', maxWidth: '600px' }} />
      </section>
    </div>
  );
};

export default DynamicProgramming;
