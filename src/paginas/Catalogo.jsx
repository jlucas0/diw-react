import { Link } from "react-router-dom";

import {useState} from "react";

import Articulo from '../componentes/Articulo';

const listaArticulos = [

  {id:1,nombre:"Espada",precio:800,foto:"https://m.media-amazon.com/images/I/310VgV3U9zL._AC_.jpg",texto:"Una espada que mata mucho"},
  {id:2,nombre:"Hacha",precio:300,foto:"https://assets.katogroup.eu/i/katogroup/CS90WVBB_01_cold-steel",texto:"Corta que no veas"},
  {id:3,nombre:"Ballesta",precio:480,foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Armborst%2C_1500-tal_-_Livrustkammaren_-_106745.tif/lossy-page1-1200px-Armborst%2C_1500-tal_-_Livrustkammaren_-_106745.tif.jpg",texto:"Ay como le des..."},
  {id:4,nombre:"Martillo",precio:800,foto:"https://lordofbattles.com/wp-content/uploads/2021/08/1-44.jpg",texto:"Cuidado no te pilles el dedo"},
  {id:5,nombre:"Lanza",precio:150,foto:"https://www.dragonsports.eu/484671-verylarge_default/spear-with-dismantable-blade-polypropylene-black-spear-head.jpg",texto:"La punta hacia delante"},
  {id:6,nombre:"Arco",precio:200,foto:"https://images-na.ssl-images-amazon.com/images/I/31erweTaTdL._AC_.jpg",texto:"Que no se te acerquen"}

];
const carrito = {};

function calculaPrecio(){
  let total = 0;
  //Se recalcula el precio total y se actualiza
  Object.values(carrito).forEach(val => {
    total += val;
  });
  return total;
}

const Catalogo = () => {


  const [precio,setPrecio] = useState(calculaPrecio());
  const totalArticulos = (articulo,precio) => {
    carrito[articulo] = precio;
    setPrecio(calculaPrecio());
  };
  const componentesArticulo = listaArticulos.map((articulo) => 
    <Articulo key={articulo.id} id={articulo.id} nombre={articulo.nombre} precio={articulo.precio} foto={articulo.foto} texto = {articulo.texto} totalArticulos={totalArticulos} cantidadCarro={(carrito[articulo.id]!=undefined ? carrito[articulo.id]/articulo.precio : 0)}/>
  );

  return (
    <main>
    <section>
      <h2>Elige tus armas</h2>
      <ul>
        {componentesArticulo}
      </ul>
    </section>
    <div id="precioTotal">
      <h3>Precio total: {precio} €</h3>
      {precio > 0 && <Link to="/carrito" state={{precio:precio}}><button className="boton" >Pagar ahora</button></Link>}
    </div>
  </main>
  );
};

export default Catalogo;