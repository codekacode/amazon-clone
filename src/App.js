import { useEffect } from "react";
import 
{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from './Header';
import Home from './Home';
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";


const promise = loadStripe('pk_test_51LHWLhIWYHUGjfA0Nfiq5vv4ixOzuWhDCejHGZcpU6lNyUk71unU5RwqMkn7CwnNOD2P0QTsIWgk1l2ixFNPVjsy00MsjoaLg4')


function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >> ",authUser)
      if(authUser){
      dispatch({
        type: "SET_USER",
        user: authUser,
      })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/checkout" element={<Checkout />}/>  
            <Route path="/login" element={<Login />}/>
            <Route 
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
              }
            />
            <Route path="/orders" element={<Order />}/> 
         </Routes>
      </div>
    </Router>
  );
}

export default App;
