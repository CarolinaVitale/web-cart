import './App.css';
import Navbar from "./components/Navbar/NavigationBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path='/products' element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </div>
  );
}

export default App;

