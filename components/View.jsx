import React from "react";

function View() {
  return (
    <>
      <div className="row align-items-center">
        <div className="col">
          <div className="box">
            <span className="txtBox">Aqui veras tu nft (1)</span>
          </div>
        </div>
        <div className="col">
          <div className="box">
            <span className="txtBox">Aqui veras tu nft (2)</span>
          </div>
        </div>
        <div className="col">
          <div className="box">
            <span className="txtBox">Aqui veras tu nft (3)</span>
          </div>
        </div>
      </div>
      <center>
        <button type="button" className="btn btn-outline-secondary">Secondary</button>
      </center>
    </>
  )
}
export default View