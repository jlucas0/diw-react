import { Link } from "react-router-dom";

const Portada = () => {
  return (
    <main id="portada">
      <h2>Prepárate para la batalla</h2>
      <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzdjMWZhOTBhLTVlNTQtNDc2Ni1iNTQ4LTRjYjU0OWFlZjE0Ni0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="/>
      <Link to="/articulos">
        <button className="boton">Accede</button>
      </Link>
    </main>
  );
};

export default Portada;