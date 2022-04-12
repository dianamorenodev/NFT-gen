import React from "react";
import react from '../img/react.png';
import firebase from '../img/firebase.png';
import bootstrap from '../img/bootstrap.png';

function Footer(){
  return(
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <a href="https://es.reactjs.org/"><img src={react}/></a>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <a href=""><img src={firebase} /></a>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <a href="https://getbootstrap.com/"><img src={bootstrap} className="rounded" alt="..."/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;