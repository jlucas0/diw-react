import { useState } from "react";

function Articulo({id,nombre,precio,texto,foto,totalArticulos,cantidadCarro}) {
  const [cantidad, setCantidad] = useState(cantidadCarro);
  const modificarCantidad = (accion) => {
    let nuevaCantidad = cantidad;
    if(accion.target.dataset.accion == "+"){
      nuevaCantidad++;
    }else if(cantidad > 0){
      nuevaCantidad--;
    }
    setCantidad(nuevaCantidad);
    totalArticulos(id,precio*nuevaCantidad);
  }
  return (
    <li>
      <div className="contenedorImg">
        <img src={foto}/>
      </div>
      <h3>{nombre} - {precio} €</h3>
      <p>{texto}</p>
      <div className="precio">
        <div>
          <label>Cantidad:</label>
          <button className="cantidadBoton" data-accion="-" onClick={modificarCantidad}>-</button> {cantidad} <button className="cantidadBoton" data-accion="+" onClick={modificarCantidad}>+</button>
        </div>
        <span>Precio: {precio*cantidad} €</span>
      </div>
    </li>
  );
}

export default Articulo;