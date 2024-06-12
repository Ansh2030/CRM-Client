import {Routes, Route, BrowserRouter } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { AuthProvider } from "./Context/authContext";
import './App.css';
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { useAuth } from "./Context/authContext";
import Audience from "./Components/Audience/Audience";
import Campaign from "./Components/Campaign/Campaign";


function App() {

  const {user} = useAuth();
// const[user, setUser] = useState(null);
// const login = async()=>{
//   try{
//     const url = `${process.env.REACT_APP_URL}/auth/login/success`;
//     const {data}=  await axios.get(url,{withCredentials:true});
//     setUser(data.user._json);
//   }
//   catch(err){
// console.log(err);
//   }
// }

// useEffect(()=>{
//   login();
// },[]);

  return (
   <>
    <BrowserRouter>
      <Routes>
    <Route exact path= "/" element={user?<Audience/>:<Login/>} />
    <Route exact path = "/login" element = {<Login/>}/>
    <Route exact path = "/campaign" element  = {<Campaign/>}/>
   </Routes>
      </BrowserRouter>
   </>
     
  
   
 

  );



}

export default App;
