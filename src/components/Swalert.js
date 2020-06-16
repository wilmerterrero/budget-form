import React from "react";
import Swal from "sweetalert2";

const Swalert = ({ cambiarSwal }) => {
  Swal.fire({
    title: "¡Bienvenido!",
    html: "<h2>Aplicación Web en fase de pruebas, con la que podrás calcular tu Presupuesto Semanal. <b>Si esta aplicación fuera tuya ¿Qué cosas te gustaría incluir?</b></h2>",
    imageUrl:
      "https://www.gestion.org/wp-content/uploads/2014/07/que-es-presupuesto-662x551.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    footer: 'By Wilmer Terrero'
  });

  //mandamos el state a false para que solo lo muestre una vez
  cambiarSwal(false);
  
  return <div></div>;
};

export default Swalert;
