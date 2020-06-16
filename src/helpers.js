export const revisarPresupuesto = (presupuesto, restante) => {

    //cambiamos la clase del input segun el restante que quede del presupuesto

    //clase CSS
    let clase;

    //75%
    if( (presupuesto / 4) > restante ){
        clase = 'alert alert-danger'
    } 
    //50%
    else if( (presupuesto / 2) > restante ){
        clase = 'alert alert-warning'
    } 
    //100%
    else{
        clase = 'alert alert-success'
    }

    return clase;
}
