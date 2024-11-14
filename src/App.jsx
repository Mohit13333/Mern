import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import Admin from "./components/layouts/Admin";
import Users from "./components/layouts/Users";
import UsersContact from "./components/layouts/Contact";
import AdminServices from "./components/layouts/Services";
import AdminUpdate from "./pages/AdminUpdate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/admin" element={<Admin/>}>
          <Route path="users" element={<Users/>}/>
          <Route path="contacts" element={<UsersContact/>}/>
          <Route path="services" element={<AdminServices/>}/>
          <Route path="users/:id/edit" element={<AdminUpdate/>}/>
          </Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
