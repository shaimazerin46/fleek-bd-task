import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./Layouts/HomeLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HomeLayout></HomeLayout>}>
       <Route path="/" element={<Home></Home>}></Route>
       
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
  </Routes>
   
</BrowserRouter>,
)
