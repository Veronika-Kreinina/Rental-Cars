import "./App.css";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
