import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutesApp from "./private.routes";

import Home from "../views/Home";
import Contact from "../views/Contact";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Dashboard from "../views/Dash";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<PrivateRoutesApp />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;