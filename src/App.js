import React, { useEffect } from 'react';


import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51HURqIGScuVPJsj6YP9e9W66YxStW0uWyQKqyuoqD1vjCcIQSz3KioPKSt5dNp8XlQ7PS9fYZ25iF8FVAFEQlG0J00aOSBL2uq"
);

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()  => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logging in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logout the user
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // clean up 
      unsubscribe();
    };
  },[]);



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
