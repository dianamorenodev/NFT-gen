import React from "react";
import { CreateCanvas } from "./Test";
import { CreateImage } from "./Test";

function Modal(){
  return (
    <div type="button" className="Modal">
      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span>Añadir capas</span>
      </button>
      <div className="modal fade" id="exampleModal" tab-index="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Seleccionar archivo</h5>
              <button type="button" className="btn-close" dataBsDismiss="modal" aria-label="Close"></button>
            </div>
            <div type="button">
              <center>
                <input className="form-control" id="inputGroupFile01"type="file" onClick={CreateImage}/>
                {/* <input className="form-control" id="inputGroupFile01" type="file" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
              </center>
            </div>
            <div className="modal-body">
              <span>{show}</span>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" onClick={CreateCanvas} aria-label="Close">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Modal