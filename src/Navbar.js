import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import Header from "./Header"
import Page1About from "./pages/Page1About";
import Page1Contact from "./pages/Page1Contact";
import Page1Services from "./pages/Page3Service";

import "./App.css"
 const Navbar = () => {

    const[show,setShow]= useState(false);
    return (
<>
<section className="navbar-bg"> 
 <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
  <a class="navbar-brand" href="#">Kajalpay</a>

    <button class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick = {()=> setShow (!show)}>
           <span class="navbar-toggler-icon"></span>
    </button>

    <div class={`collapse navbar-collapse ${show?"show":" "}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/">Link</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/work">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      <form class="d-flex">
        
        <button class="btn" type="submit">Login</button>
        <button class="btn " type="submit">Signup</button>
      </form>
    </div>
  </div>
</nav>
</section>
 </>
    )
};
export default Navbar;
