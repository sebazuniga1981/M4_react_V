import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from "./components/Footer";
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pizza from './components/Pizza';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path = '/login' element = {<LoginPage />} />
          <Route path = '/register' element = {<RegisterPage />} />
          <Route path="/" element={<Cart />} />

           {/* las siguientes las agregaremos después */}
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
