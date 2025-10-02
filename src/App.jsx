import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Footer from "./components/Footer";
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import Cart from "./views/Cart";
import { Routes, Route } from "react-router-dom";
import Pizza from './views/Pizza';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* Futuro */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
