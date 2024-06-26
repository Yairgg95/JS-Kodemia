const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario */
// Paso 1: Función para obtener name y lastname en formato string
function formatNameAndLastname(user) {
    return `${user.name} ${user.lastname}`;
  }
  
     const usersNamesList = [];
  
  
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const formattedName = formatNameAndLastname(user);
    usersNamesList.push(formattedName);
  }
  
  // Mostrar los resultados
  console.log(usersNamesList);


     /* 2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male" */

const getMales = (list) => {
    const males = []
    for (let i = 0; i < list.length; i++){
     const user = list[i]; 
        if (user.gender === "Male") {
      males.push(user);

    }
}
return males;
};

console.log(getMales(users))


     /*
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"*/
      const getFemales = (list) => {
        const females = []
        for (let i = 0; i < list.length; i++){
         const user = list[i]; 
            if (user.gender === "Female") {
          females.push(user);
     }
    }
    return females;
    };
    
    console.log(getFemales(users))


      /*
      4.- Necesitamos saber la edad promedio de los usuarios
*/
const getAverageAge = (list) => {
    let averageAge = 0;
    for (let i = 0; i < list.length; i++) {
        const user = list[i]
        averageAge += user.age;
    }
    const calculateAverageAge = averageAge / list.length ;
    return averageAge
}

console.log("La edad promedio de los usuarios es:",getAverageAge(users))



/*
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */


