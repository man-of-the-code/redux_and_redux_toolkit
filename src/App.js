import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import { Provider } from 'react-redux';
import store from './components/store/Store';

const App = () => {
  return (
    <div className='app'>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={ <Home/> } ></Route>
          <Route path='/cart' element={ <Cart/> } ></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      <h4>App</h4>
    </div>
  )
}

export default App