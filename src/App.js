import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';

function App() {
  return (
    <Router>
      <div className="App">
         <Header/>
         <div className='container'>
          <Routes>
       
              <Route path='/'  element={<Home/>} exact/>
              <Route path='/product/:id'  element={<ProductDetails/>} exact/>
              <Route path='/login' element={<Login/>} exact/>
          </Routes>
          </div>
         <Footer/>
      </div>
    </Router>
  );
}

export default App;
