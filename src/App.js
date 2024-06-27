import { Home } from "./HomePage";
// import {Products} from "./Products";
import Products from "./Products";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Login from "./Login";
import Contact from "./ContactUs";
import { HashRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar/>
            <Home />
            <Products />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
    
    

  );
}

export default App;
