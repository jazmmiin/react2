import React, { useState } from 'react'; //useState para poder cambiar el valor del componente

function Contador() {
    const [contador, setContador] = useState(0);
  
    const handleIncrementar = () => {
      setContador(contador + 1);
    };
  
    const handleDecrementar = () => {
      setContador(contador - 1);
    };
  
    return (
      <div>
        <p>Contador: {contador}</p>
        <botón onClick={handleIncrementar}>+</botón>
        <botón onClick={handleDecrementar}>-</botón>
      </div>
    );
  }
  
  export default Contador;