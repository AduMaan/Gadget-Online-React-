
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    
    <div class="grid-container">
      <header class="row">
        <div>
          <a class="brandname" href="/">Gadget Online</a>
        </div>
        <div>
          <a href="home.html">Home</a>
          <a href="aboutus.html">About Us</a>
          <a href="ContactForm.js">Contact Us</a>
          <a href="Shop.js">Contact Us</a>
          
          
        </div>
        <div>
          <a href="/">Cart</a>
          <a href="/">Log In</a>
          <button onclick="checkout.html" className="primary"> Checkout</button>
        </div>
      </header>
      <main> 
      
      <div>
        
        <Routes>
        <Route path="/product/:id" element={<ProductScreen/>}></Route>
        <Route path="/" element={<HomeScreen/>} exact></Route>
        </Routes>
      </div>
      </main>
      <footer class="row center">2021 All Right Resered</footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
