import 
{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Checkout from "./Checkout";
import Header from './Header';
import Home from './Home';
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/checkout" element={<Checkout />}/>  
            <Route path="/login" element={<Login />}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
