import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./paginas/Layout";
import Portada from "./paginas/Portada";
import Catalogo from "./paginas/Catalogo";
import Carrito from "./paginas/Carrito";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portada />} />
          <Route path="articulos" element={<Catalogo />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
