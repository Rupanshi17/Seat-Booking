import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Myclass from './components/Myclass';

import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
 import {  Routes, Route } from 'react-router-dom';
import Resetpassword from './components/Resetpassword';
import Userprofile from './components/Userprofile';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import Layoutapp from './components/Layoutapp';
import Bookings from './components/Bookings';

// import Seatswapform from './components/Seatswapform';
// class App extends Component {
//   render() {
  function App()
  {
    return (
      <div className="App">
        
         
        
        
        <Routes>  {/* Routes replaces the deprecated Switch component*/}
         <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/userprofile" element={<Userprofile/>} />
          <Route path="/layout" element={<Layoutapp/>} />
          <Route path="/bookings" element={<Bookings/>} />

        
        </Routes>
                
       
      </div>
    );
  }
 
export default App;
