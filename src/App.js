import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import { Navigate, Route, Routes} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<ProductDetail />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/redirect" element={<Navigate to="/" />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
