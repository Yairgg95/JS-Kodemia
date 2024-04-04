// monto previsto para ese mismo dìa
const montoPrevisto = 10;
// Crear una variable para guardar no. de ordenes de un dia
const ordenesEfectivas = 17;
// variable para diaDelMes
const diaDelMes = 3;

function esPar(diaDelMes){
   return diaDelMes % 2 === 0;
} 

function calcularProporcionCumplidas(ordenesEfectivas, montoPrevisto) {
    return (montoPrevisto / ordenesEfectivas) * 100;
}


function proyectarCapacidad(diaDelMes) {

    const esDiaPar = esPar(diaDelMes);

if (ordenesEfectivas > montoPrevisto ) {
    console.log("Debes incrementar la capacidad en el dìa siguiente");

} else if (ordenesEfectivas< montoPrevisto ) {
console.log("Debes reducir la capacidad");
} else {
    console.log("Estas bien sigue así!");
}

if (!esDiaPar && ordenesEfectivas > montoPrevisto) {
    console.log("El día es impar, es probable una mayor demanda el dìa siguiente")
} 

const proporcionCumplidas = calcularProporcionCumplidas(montoPrevisto, ordenesEfectivas);
    console.log("Proporción de órdenes cumplidas: " + proporcionCumplidas.toFixed(2) + "%");

}

proyectarCapacidad (ordenesEfectivas, montoPrevisto, diaDelMes);

