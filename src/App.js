import React from 'react'
import DashboardPage from "./pages/DashboardPage";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Analytics from './pages/Analytics';
import ProblemsPage from './pages/ProblemsPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<DashboardPage />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="problems" element={<ProblemsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
