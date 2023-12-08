import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { loadUser } from './actions/userAction';
import store from './store';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';


function App() {

useEffect(() => {
  store.dispatch(loadUser())
},[])

  return (
    <Router>
      <div className="App">
         <Header/>
         <div className='container'>
          <Routes>
              <Route path='/' element={<Home/>} exact/>
              <Route path='/search/:keyword' element={<Home/>} />
              <Route path='/login' element={<Login/>} exact/>
              <Route path='/register' element={<Register/>} exact/>
              <Route path='/me' element={<Profile/>} exact/>
              <Route path='/product/:id'  element={<ProductDetails/>} exact/>
          </Routes>
          </div>
         <Footer/>
      </div>
    </Router>
  );
}

export default App;
