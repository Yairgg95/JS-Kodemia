const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
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
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos ) */
  
  
  const getAgeInDogYears = (list) => { 
  let AgeinDogYears = list.map((can) => can.edad * 7);
      return  AgeinDogYears
  }
  
  console.log("Esta es la edad equivalente en años perrunos de cada perro en la lista:",`${getAgeInDogYears(canes)}`);

  
  
  /*
      2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
      */

      const vaccinatedDogs = (list) => {
        let total = 0;

        list.forEach((can) => {
            if(can.vacunado === true) {
                total++;
            } 
        });
        return total;
        
    }
  
  
 console.log("La cantidad de perros vacunados es:",vaccinatedDogs(canes))     
      
      /*
      3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
          "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "*/

 const getNameAndAddres = (list) => {
const dogAndAddres = list.map ((can) => { 
    const { calle, numero, colonia, codigoPostal } = can.direccion;
   return `La dirección de ${can.nombre}: es la siguiente:  ${calle} ${numero} ${colonia} ${codigoPostal}`;
});
return dogAndAddres.join("\n")
}


console.log(getNameAndAddres(canes));

        /*
      4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
*/

const getAverageAge = (list) => {
    let averageAge = 0;
    for (let i = 0; i < list.length; i++) {
        const can = list[i]
        averageAge += can.edad;
    }
    const calculateAverageAge = averageAge / list.length;
    return averageAge
}

console.log("El promedio de edad en años humanos de la lista de perros es la siguiente", getAverageAge(canes))
/*
      5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No") */

      const changeValue = (list) => {
        const newValue = [];
        for (i = 0; i < list.length; i++) {        
            const can = list[i];
            if (can.vacunado === true) {
                can.vacunado = "Si"
            } else {
            can.vacunado = "No"
        }
        newValue.push(can)
    }
        return newValue
     }
      
console.log("Se realizo una modificación en la lista de canes cambiando el valor de vacunado por si o no", changeValue(canes))
  
  /* 6.- Necesitamos una nueva lista con únicamente el nombre de cada can
  */
  const getFullNameList = (list) => { 
  let Dognames = list.map((can) => `${can.nombre}`);
      return  Dognames
  }
  
  console.log("Estos son los nombres de los perros en la lista:", `${getFullNameList(canes)}`);