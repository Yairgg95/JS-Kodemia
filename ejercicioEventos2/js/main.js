/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
*/
const user = (name, email, password) => {
  this.name = name;
  this.email = email;
  this.password = password; 
}
/*
  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons
  */
  const usersList = []; 

const getUsersList = (objectsArray, existUser) => {
  const {name, email, password } = existUser;
  const userExists = usersList.some((user) => user.email === email);
  userExists ? null : usersList.push(existUser);
  return usersList
};



  /*
  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */
