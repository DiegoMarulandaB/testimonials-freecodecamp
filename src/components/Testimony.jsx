import React from "react";
import "../stylesheets/Testimony.css";
import testimonyImages from "../assets/img/Testimony-Emma.png";

// const testimonyImages = require.context("../assets/img".true);

//componente funcional
//!export nombradas: export function Testimonio
function Testimony(props) {
  return (
    <div className="container-testimony">
      <img
        className="image-testimony"
        //src={require(`../img/testimonio-${props.img}.png`)}esto funciona siempre y cuando este en public/assets, en src/assets no funciona
        // src={testimonyImages(`./${img}.png`)}
        src={testimonyImages}
        alt={props.description}
      />
      <div className="container-text-testimonial">
        <p className="testimonial-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="charge-testimony">
          {props.charge} at <strong>{props.company}</strong>
        </p>
        <p className="text-testimony">
          {props.testimony}
          <strong>{props.text}</strong>
        </p>
      </div>
    </div>
  );
}

//siempre se debe exportar un archivo o sino da errores
//Exportaciones por defecto: permite decir que ese sera el unico componente o elemento que se va a exportar de ese archivo
export default Testimony;
