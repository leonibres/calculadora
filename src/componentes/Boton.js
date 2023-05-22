import React from 'react'; // Importa el módulo React
import '../hojas-de-estilo/Boton.css'; // Importa la hoja de estilos de Boton

function Boton(props) {
  // Esta función verifica si un valor dado es un operador o no
  const esOperador = (valor) => {
    // Comprueba si el valor no es un número y no es un punto decimal ni el operador de igualdad
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} // El div tiene una clase "boton-contenedor" y, si el contenido es un operador, se agrega la clase "operador"
      onClick={() => props.manejarClic(props.children)} // Asigna la función de clic al evento onClick
    >
      {props.children} {/* Muestra el contenido del botón */}
    </div>
  );
}

export default Boton;


