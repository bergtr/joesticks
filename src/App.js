import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInSignup from './pages/sign-in-sign-up/sign-in-sign-up.component';

import './App.css'

function App() {
  return (
    <div >
    <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignup} />
      </Switch>
    </div>
  );
}

export default App;
