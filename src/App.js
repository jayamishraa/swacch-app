import DashboardPage from "./pages/DashboardPage";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="swach-app" element={<Main />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
