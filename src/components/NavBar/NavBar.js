import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
  <a className="navbar-brand colo" href="#">Internship Offers</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
    <form className="form-inline my-2 my-lg-0 ml-auto">
    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Login</button>
  </form>
  </div>

  
</nav>
<br></br>
<div className="container">
    <div className="row">
        <div className="col-md-4 block all text-center">
        <a >
            <i className="fa-2x far fa-check-circle ho1"></i>
            <div className="ho1">All</div>
        </a>
        </div>
        <div className="col-md-4 block text-center">
        <a>
            <i className="fa-2x fas fa-code ho1"></i>
            <div className="ho1">Hackathon</div>
        </a>
        </div>
        <div className="col-md-4 block text-center">
        <a>
            <i className="fas fa-shopping-bag fa-2x ho1"></i>
            <div className="ho1">Jobs</div>
        </a>
        </div>

    </div>
<br></br>
<h3 className="text-center">Internships Available</h3>
</div>


<br></br>
</div>
    )
}

export default NavBar
