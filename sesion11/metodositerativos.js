const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      pais: "México",
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      pais: "Colombia",
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      1.- Necesito conocer la edad promedio de todos los perros
*/

const getAverageAge = (list) => {
  let  total = 0;
  list.forEach((can) => total += can.edad);
    const calculateAverageAge = total / list.length
    return calculateAverageAge
}
console.log("La edad promedio de los perros en la lista es:",getAverageAge(canes)) 
/*
      2.- Necesito obtener una lista de perros basados en el país al que pertenecen
      */
     const getDogsByCountry = (list,country) => {
      let result = list.filter(
        (dog) => dog.pais.toLowerCase() === country.toLowerCase()
      );
      if (!result.length) {
        return `No hay perros que pertenezcan a ${country}`;
      } else {
        return result;
      }
     }

console.log(getDogsByCountry(canes,"Mexico"))


     /*
      3.- Necesito una lista de los códigos postales de los perros
      */

const getZipCode =(list) =>
list.map((can) => can.direccion.codigoPostal);

console.log(getZipCode(canes))


/*
      4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
      */
  const getCountryList = (list) => {
    let result = list.reduce((accum, current) =>  accum.includes(current.pais) ? accum : [...accum, current.pais],[]);
    return result;
    }
  
    console.log(getCountryList(canes));