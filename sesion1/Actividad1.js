// monto previsto para ese mismo dìa
const montoPrevisto = 5;
// Crear una variable para guardar no. de ordenes de un dia
const ordenesEfectivas = 11;

function proyectarCapacidad() {

if (ordenesEfectivas > montoPrevisto ) {
    console.log("Debes incrementar la capacidad en el dìa siguiente");

} else if (ordenesEfectivas< montoPrevisto ) {
console.log("Debes reducir la capacidad");
} else {
    console.log("Estas bien sigue así!");
}
}

proyectarCapacidad ();