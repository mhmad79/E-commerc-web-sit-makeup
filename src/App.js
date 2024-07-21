import About from './pages/About';

import {Route, BrowserRouter as Router, Routes,} from "react-router-dom"

import Home from './pages/Home';

import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {

  return(

    <Router>

      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        </Routes>

      <Footer />

    </Router>

  );
}

