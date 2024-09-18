import React, { useState } from 'react';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
  
    const agregarTarea = () => {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    };
  
    return (
      <div>
        <h2>Lista de tareas</h2>
        <ul>
          {tareas.map((tarea, indice) => (
            <li key={indice}>{tarea}</li>
          ))}
        </ul>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Agregar nueva tarea"
        />
        <botón onClick={agregarTarea}>Agregar</botón>
      </div>
    );
  }
export default ListaTareas;