import './App.css';
import Boton from './components/Boton';
import Tarjeta from './components/Tarjeta';

const App = () => {
  const primerNombre = 'Ana Clara';
  const apellido = 'Reale';

  let nombreDeClase = ""
  
  if (primerNombre === "Maca") {
    nombreDeClase = "fondoRojo"
  }
  else {
    nombreDeClase = "fondoAzul"
  }

  return (
    <>
      {/* Esto es un fragmento de React, para cuando necesitamos retornar dos etiquetas html adyancentes */}
      <div className={nombreDeClase}>
        {/* Adentro de JSX puedo usar expresiones, siempre que las rodee con llaves */}
        <p>Hola, {primerNombre + apellido}, bienvenida a React</p>

        <Boton />
        <Boton />
        <Boton />
        <Boton />
        <Boton />
      </div>
      <div>
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </>
  );
};

export default App;
