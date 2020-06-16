import React from "react";
import Swal from "sweetalert2";

const Swalert = ({ cambiarSwal }) => {
  Swal.fire({
    title: "¡Bienvenido!",
    text: "Con esta Aplicación Web podrás calcular tu Presupuesto.",
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
