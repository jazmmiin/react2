import React from 'react';
import 'CardStyles.css';
function Card(props) { //Nota:  Los props son una forma de pasar datos de un componente principal a un componente secundario en una aplicación React.
  return (
    <div className="card">
      <img src={props.image} alt={props.Nombre} />
      <h2>{props.Nombre} {props.Apellido}</h2>
      <p>{props.Profesion}</p>
    </div>
  );
}

export default Card;