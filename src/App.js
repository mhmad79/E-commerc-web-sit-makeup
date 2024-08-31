import About from './pages/About';

import {Route, BrowserRouter as Router, Routes,} from "react-router-dom"

import Home from './pages/Home';
// import Product from './pages/Product';

import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './pages/Product';
import Cart from './pages/cart';



export default function App() {

  return(

    <Router>

      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<Product />} />

        </Routes>

      <Footer />

    </Router>

  );
}

