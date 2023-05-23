import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./Components/Register/index";
import Home from "./Components/Home/index";
import MyProfile from "./Components/MyProfile/index";
import LogIn from "./Components/LogIn/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./mynavbar";
import './Styles/style.css';
import LoggedInRoute from './Components/PrivateRoute/loggedinroute'
import LoggedOutRoute from './Components/PrivateRoute/loggedoutroute'
export default function App() {
  


  return (
    <BrowserRouter>
      <MyNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<LoggedInRoute><MyProfile /></LoggedInRoute>} />
          <Route path="/register" element={<LoggedOutRoute><Register /></LoggedOutRoute>} />
          <Route path="/login" element={<LoggedOutRoute><LogIn /></LoggedOutRoute>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}