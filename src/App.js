import React from "react";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles/app.css"
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile/>
    {/* <Home/> */}
     {/* <Login/>*/}
     {/*<div style={{height:"25vh",display:"flex",alignItem:'center'}}></div>
      <Register/>*/}
    </div>
  );
}

export default App;