import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe("Insert The Stripe Public Key");

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>>", authUser)
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/orders' element={[<Header />, <Orders />]} />
          <Route path='/login' element={[<Login />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path='/' element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
