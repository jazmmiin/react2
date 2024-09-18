import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(`¡Hola, ${nombre}!`);
    setNombre('');
  };

  return (
    <div>
      <h2>Formulario de bienvenida</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese su nombre"
        />
        <botón type="submit">Enviar</botón>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Formulario;