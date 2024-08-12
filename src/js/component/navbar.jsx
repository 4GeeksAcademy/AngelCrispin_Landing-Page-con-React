import React from "react"

const NavBar = () => {
    return (
      <div className="bg-dark">
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark mx-5">
          <h1 className="text-white" href="#">Start Bootstrap</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Context</a>
            </div>
          </div>
        </nav> 
      </div> 
    );
}

export default NavBar;

