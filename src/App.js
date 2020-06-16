import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Error from './components/Error';
import Swalert from './components/Swalert'

function App() {

  //states
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]); //con este iteramos y guardamos nuevos gastos
  const [gasto, guardarGasto] = useState({}); //con este creamos un nuevo gasto
  const [creargasto, guardarCrearGasto] = useState(false);
  const [err, presupuestoInsuficiente] = useState(false);
  const [swl, cambiarSwal] = useState(true);

  //useEffect que actualiza el restante
  useEffect(() => {

    if(creargasto){
      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;

      //revisamos que este no sea negativo
      if(presupuestoRestante < 0){
        presupuestoInsuficiente(true);
        guardarCrearGasto(false);
        return;
      } else{
        guardarRestante(presupuestoRestante);
        presupuestoInsuficiente(false);
      }

      //agrega el gasto y despues vuelve a false
      guardarCrearGasto(false);
    }
  }, [creargasto, gasto, gastos, restante]);
  

  return (
    <div className="container">
      {/* MOSTRANDO UNA VEZ EL SWAL */}
      {swl ? (
        <Swalert
          cambiarSwal={cambiarSwal}
        />
      ) : null}
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {/* CARGA CONDICIONAL DE UN COMPONENTE */}
          {/* LOGICA: ? es true al inicio : en el componente Pregunta despues de recibir
           el presupuesto, pasa a false */}
          {mostrarpregunta ? (
              <Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarPregunta = {actualizarPregunta}
              />
          ) : (
            <div className="row">
            <div className="one-half column">
              { err ? <Error mensaje="Saldo Insuficiente"/> : null}
              <Formulario 
                guardarGasto = {guardarGasto}
                guardarCrearGasto = {guardarCrearGasto}
              />
            </div>
            <div className="one-half column">  
                <Listado 
                  gastos={gastos}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />     
            </div>
          </div>
          )}
          
          
        </div>
      </header>
      
    </div>
  );
}

export default App;
