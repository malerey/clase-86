import './Tarjeta.css';
import Boton from './Boton';

const Tarjeta = () => {
  return(
    <article className="card">
      <h2>Titulo de la tarjeta</h2>
      <div>
        <p>Cuerpo de la tarjeta</p>
        <Boton />
      </div>
    </article>
  )
}

export default Tarjeta; 
