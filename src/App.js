import React from 'react';
import './App.css';
import Header from './components/Header'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './pages/Cart'
import Photos from './pages/Photos';

function App() {
  return (
    <div>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Photos />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
