import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { auth } from '../firebase';
import './App.css';
import Checkout from './Checkout/Checkout';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Payment from './Payment/Payment';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders/Orders';

const promise = loadStripe('pk_test_51JzqOiHUJfjpTGz5gxcymES59ZIoUVJTyK89xAWeTmwCh1KDu7IH2FAd5aIWB5Bc0ROrQ6PfDbCJqPLNoxmxSoLT00iclEVB5n');

function App() {
   const [{ user }, dispatch] = useStateValue()
   useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
       if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
       } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
       }
    })
   }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route
            exact
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />  
        <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
           <Route
            exact
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
           <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
