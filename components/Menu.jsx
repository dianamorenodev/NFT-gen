import React from "react";
import LoginButton from '../Auth0.js'

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">NFT-GEN</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex">
              <LoginButton/>
              <button className="btn btn-outline-light" type="submit" id="btnLogin">login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Menu;