/*
    1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.

     */

    const listaAlumnos = {
  alumno1: {
    nombre: "Yair",
    apellidoPaterno: "Guadarrama",
    apellidoMaterno: "Gonzaga"
  },
  alumno2: {
    nombre: "ejemplo",
    apellidoPaterno: "ejemplo",
    apellidoMaterno: "ejemplo"
  },
  alumno3: {
    nombre: "ejemplo",
    apellidoPaterno: "ejemplo",
    apellidoMaterno: "ejemplo"
  },
  alumno4: {
    nombre: "ejemplo",
    apellidoPaterno: "ejemplo",
    apellidoMaterno: "ejemplo"
  },
  alumno5: {
    nombre: "ejemplo",
    apellidoPaterno: "ejemplo",
    apellidoMaterno: "ejemplo"
  }
};

// Función para extraer el primer carácter de cada valor y agregar un punto
function obtenerInicialesConPunto(alumnoKey) {
    const alumno = listaAlumnos[alumnoKey];
    
    if (!alumno) {
      return "Alumno no encontrado";
    }
    
    const { nombre, apellidoPaterno, apellidoMaterno } = alumno;
    
    const inicialNombre = nombre.charAt(0) + ".";
    const inicialApellidoPaterno = apellidoPaterno.charAt(0) + ".";
    const inicialApellidoMaterno = apellidoMaterno.charAt(0) + ".";
    
    return `${inicialNombre} ${inicialApellidoPaterno} ${inicialApellidoMaterno}`;
  }
  
  // Ejemplo de uso:
  const alumnoSeleccionado = "alumno1";
  const inicialesConPunto = obtenerInicialesConPunto(alumnoSeleccionado);
  console.log(inicialesConPunto); // Resultado: "J. P. G."


/*
    2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.

    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
*/


  