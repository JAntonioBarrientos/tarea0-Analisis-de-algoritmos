import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SortingPage from './pages/SortingPage';
import GraphPage from './pages/GraphPage';
import DynamicProgrammingPage from './pages/DynamicProgrammingPage';
import GreedyPage from './pages/GreedyPage';
import BacktrackingPage from './pages/BacktrackingPage';
import DivideAndConquerPage from './pages/DivideAndConquerPage';
import SearchPage from './pages/SearchPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sorting" element={<SortingPage />} />
      <Route path="/graph" element={<GraphPage />} />
      <Route path="/dynamic-programming" element={<DynamicProgrammingPage />} />
      <Route path="/greedy" element={<GreedyPage />} />
      <Route path="/backtracking" element={<BacktrackingPage />} />
      <Route path="/divide-and-conquer" element={<DivideAndConquerPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
