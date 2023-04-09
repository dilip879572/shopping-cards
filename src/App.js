import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/pages/Header";
import Home from "./Components/pages/Home";
import Theader from "./Components/pages/Theader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/pages/Footer";
import MyOrder from "./Components/pages/MyOrder";
import OurProduct from "./Components/pages/OurProduct";
import Profile from "./Components/pages/Profile";
import SignUp from "./Components/pages/SignUp";
import CustomerSupport from "./Components/pages/CustomerSupport";
import SignIn from "./Components/pages/SignIn";


function App() {
  useEffect(() => {
    AOS.init(1000);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Theader/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myorder" element={<MyOrder/>}/>
          <Route path="/ourproduct" element={<OurProduct/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/customersupport" element={<CustomerSupport/>}/>
          <Route path="/signin" element={<SignIn/>}/>

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
