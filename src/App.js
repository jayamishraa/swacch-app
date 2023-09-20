import Problems from "./components/Problems";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="swach-app" element={<Main />}>
          <Route index element={<Problems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
