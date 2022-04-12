import React from "react";
import Modal from "./Modal.jsx";
import View from "./View.jsx";
import EditCanvas from "./EditCanvas.jsx";
import { useState } from "react";

function Body() {
  const [show, setShow] = useState(false);
  return (
    <div id="Body">
      <div className="container">
        <div className="row row-cols-2">
          <div className="col">
            <center>
              <h3>Añade una capa</h3>
              {show?<EditCanvas/>:undefined}
              <Modal/>
            </center>
          </div>
          <div className="col">
            <center>
              <h3>Aqui puedes ver como esta quedando</h3>
              <View/>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;