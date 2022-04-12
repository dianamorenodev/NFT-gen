import React from "react"
import { useState } from "react";

function EditCanvas() {


  const [capas, setCapas] = useState([]);

  const agregarCapa = tarea => {
    if (Capa.texto.trim()) {
      Capa.texto = tarea.texto.trim();
      const capasActualizadas = [capa, ...capas;
      setCapas(capasActualizadas);
    }
  }

  const eliminarCapa = id => {
    const capasActualizadas = capas.filter(capas => capas.id !== id);
    setCapas(capasActualizadas);
    areas(tareasActualizadas);
  }
  return (
    <div className="EditCanvas">
      <div className="infoCanva">
        <TareaFormulario onSubmit={agregarCapa} />
        <div className='canvas'>
          <span>Capas</span>
        </div>
      </div>
    </div>
  )
}

export default EditCanvas;