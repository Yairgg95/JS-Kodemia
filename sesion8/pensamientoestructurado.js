const studentsList = {

student1: { name : "Yair Guadarrama Gonzaga"},
student2: { name : "Julio Alvarez Catañeda"},
student3: { name : "Armando Alvarez Raya"},
student4: { name : "Laura Mendieta Rosas"},
student5: { name : "Fernando Sierra Moreno"}
};

/*
    1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.

     */

const initialPlusDot = (studentKey) => {
    const student = studentsList[studentKey];
    const {name} = student;
    const splitName = name.split(" ");
    const initials = splitName.map(part => part.charAt(0) + ".");
    const initialsDot = initials.join(" ")
    
 return console.log("Las iniciales del alumno seleccionado son las siguientes", initialsDot)    
}

//llamado
initialPlusDot("student4");

/*
    2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.

    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
*/


function selectAndRemoveRandomName(studentsList) {
  while (Object.keys(studentsList).length > 0) {
    
    const remainingStudents = Object.keys(studentsList);
    const randomIndex = Math.floor(Math.random() * remainingStudents.length);
    const selectedStudentKey = remainingStudents[randomIndex];
    const selectedStudentName = studentsList[selectedStudentKey].name;
    console.log(`${selectedStudentName} fue seleccionado y será eliminado`);
    delete studentsList[selectedStudentKey];
  }
  console.log("La lista de nombres no cuenta con ningún elemento");
}

// Llamado
selectAndRemoveRandomName(studentsList);

  
