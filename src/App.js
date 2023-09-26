import React from "react";
import DashboardPage from "./pages/DashboardPage";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import ProblemsPage from "./pages/ProblemsPage";
import GuidelinesPage from "./pages/GuidelinesPage";
import NotificationsPage from "./pages/NotificationsPage";
import SimpleModal from "./components/SimpleModal";

// <Route path="analytics" element={<Analytics />} />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<DashboardPage />} />
          <Route path="problems" element={<ProblemsPage />} />
          <Route path="problems/:id" element={<SimpleModal />} />
          <Route path="guidelines" element={<GuidelinesPage />} />
          <Route path="notification" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
