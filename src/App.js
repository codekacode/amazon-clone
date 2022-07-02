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
            <Route path="/payment" element={<Payment />}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
