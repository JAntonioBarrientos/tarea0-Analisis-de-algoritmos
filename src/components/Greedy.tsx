// src/components/Greedy.tsx
import React from 'react';

const Greedy: React.FC = () => {
  return (
    <div className="topic-content">
      <h2>Algoritmos Greedy</h2>
      
      <section>
        <h3>Introducción</h3>
        <p>
          Los algoritmos Greedy (voraces) son una familia de algoritmos que construyen soluciones óptimas paso a paso, eligiendo en cada paso la opción que parece ser la mejor en ese momento sin considerar el efecto futuro. Estos algoritmos son eficientes y sencillos, pero no siempre garantizan una solución óptima para todos los problemas.
        </p>
      </section>

      <section>
        <h3>Características de los Algoritmos Greedy</h3>
        <ul>
          <li><strong>Selección Local Óptima:</strong> En cada paso, el algoritmo elige la mejor opción disponible sin reconsiderar las elecciones previas.</li>
          <li><strong>Sin Retroceso:</strong> Una vez que se toma una decisión, no se revisa.</li>
          <li><strong>Simplicidad:</strong> Son generalmente fáciles de implementar y comprender.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplos de Problemas que se Pueden Resolver con Algoritmos Greedy</h3>
        <ul>
          <li><strong>Problema del Cambio de Moneda:</strong> Encontrar la menor cantidad de monedas necesarias para dar un cambio específico.</li>
          <li><strong>Problema de la Actividad:</strong> Seleccionar el máximo número de actividades que no se superponen en tiempo.</li>
          <li><strong>Árbol de Expansión Mínima (MST):</strong> Encontrar un subconjunto de las aristas que conecta todos los vértices con el peso total mínimo.</li>
        </ul>
      </section>

      <section>
        <h3>Ejemplo de Código: Problema del Cambio de Moneda en Java</h3>
        <pre>
{`import java.util.Arrays;

public class CoinChangeGreedy {
    public static int minCoins(int[] coins, int amount) {
        Arrays.sort(coins);
        int count = 0;
        for(int i = coins.length -1; i >=0; i--){
            while(amount >= coins[i]){
                amount -= coins[i];
                count++;
            }
        }
        if(amount !=0){
            return -1; // Cambio no posible
        }
        return count;
    }

    public static void main(String[] args) {
        int[] coins = {25, 10, 5, 1};
        int amount = 63;
        int result = minCoins(coins, amount);
        if(result != -1){
            System.out.println("Número mínimo de monedas: " + result);
        } else {
            System.out.println("Cambio no posible con las monedas disponibles.");
        }
    }
}`}
        </pre>
      </section>

      <section>
        <h3>Recursos Adicionales</h3>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/Algoritmo_greedy" target="_blank" rel="noopener noreferrer">
              Wikipedia: Algoritmo Greedy
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/greedy-algorithms/" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks: Greedy Algorithms
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=9XtwzdI9nKU" target="_blank" rel="noopener noreferrer">
              Video: Introducción a los Algoritmos Greedy
            </a>
          </li>
          <li>
            <a href="https://visualgo.net/en/greedy" target="_blank" rel="noopener noreferrer">
              Visualgo: Visualización de Algoritmos Greedy
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Diagramas y Visualizaciones</h3>
        <p>
          Utiliza herramientas como <a href="https://visualgo.net/en/greedy" target="_blank" rel="noopener noreferrer">Visualgo</a> para visualizar cómo funcionan los algoritmos Greedy en problemas específicos.
        </p>
        <img src="https://visualgo.net/en/greedy" alt="Visualización de Algoritmos Greedy" style={{ width: '100%', maxWidth: '600px' }} />
      </section>
    </div>
  );
};

export default Greedy;
