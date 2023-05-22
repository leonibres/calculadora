import './App.css'; // Importa el archivo CSS de la aplicación
import logo from './img/leonibres-logo.png'; // Importa la imagen del logo de leonibres
import Boton from './componentes/Boton'; // Importa el componente de Boton
import Pantalla from './componentes/Pantalla'; // Importa el componente de Pantalla
import BotonClear from './componentes/BotonClear'; // Importa el componente de BotonClear
import { useState } from 'react'; // Importa la función useState de React
import { evaluate } from 'mathjs'; // Importa la función evaluate de mathjs

function App() {
  const [input, setInput] = useState(''); // Estado para el input de la calculadora

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Error: Por favor ingrese valores para realizar los calculos');
    }
  };

  return (
    <div className='App'> {/* Contenedor principal de la aplicación */}
      <div className='leonibres-logo-contenedor'> {/* Contenedor del logo de leonibres */}
        <img
          src={logo} // Fuente de la imagen: logo de leonibres
          className='leonibres-logo' // Clase CSS para el logo
          alt='logo de leonibres' // Texto alternativo para la imagen
        />
      </div>
      <div className='contenedor-calculadora'> {/* Contenedor de la calculadora */}
        <Pantalla input={input} /> {/* Componente de Pantalla */}
        <div className='fila'> {/* Fila de botones */}
          <Boton manejarClic={agregarInput}>7</Boton> {/* Componente de Boton con el contenido */}
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App
