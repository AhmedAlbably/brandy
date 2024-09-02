import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarLogin from "./components/Utility/NavbarLogin";
import Footer from "./components/Utility/Footer";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrand from "./pages/Brand/AllBrand";
import ShopProductsPage from './pages/Products/ShopProductsPage';

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allCategory" element={<AllCategoryPage />} />
          <Route path="/allBrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductsPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
