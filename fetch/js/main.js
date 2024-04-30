const getKoders = async () => {
    let response = await fetch("https://kodemiajs-f4a26-default-rtdb.firebaseio.com/koders/.json");
    let koders = await response.json();
    let keys = Object.keys(koders);
    let kodersArray =keys.map((key) => {
        return {...koders[key],key};
    });
  // Función para imprimir Koders
  printKoders(kodersArray,"koders-list");  
};

// crear Koder en base de datos
const postKoder = async (koderObject) => {
    let response = await fetch(`https://kodemiajs-f4a26-default-rtdb.firebaseio.com/koders/.json`,
    {
        method: "POST",
        body: JSON.stringify(koderObject),
    });
    let data = await response.json()
};

// Editar koder

const editKoderById = async (koderKey, newData) => {
    let response = await fetch(`https://kodemiajs-f4a26-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
{
    method: "PUT",
    body: JSON.stringify(newData),
});
let data = await response.json();
};


const  deleteKoderById = async (koderKey) => {
    let response = await fetch(`https://kodemiajs-f4a26-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
{
    method: "DELETE",
});
let data = await response.json();
};

let saveKoderBtn = document.getElementById("save-koder-btn");

// Registro de la modal de edición NECESITO INVESTIGAR ESTE TEMA
const editModal = new bootstrap.Modal(
    document.getElementById("edit-koder-modal")
);


// Listeners
saveKoderBtn.addEventListener("click", async () => {
    let inputs = document.querySelectorAll("#koder-form input");
    let koderObject = {};
    inputs.forEach(({name,value}) => {
        koderObject[name] = value;
    });
    await postKoder(koderObject);
    await getKoders();
    inputs.forEach((input) => (input.value = ""));
});

let saveChangesBtn = document.getElementById("save-changes-btn");

// Boton para guardar cambios 
saveChangesBtn.addEventListener("click", async (event) => {
    let key = event.target.dataset.koderKey;
    let editFields = document.querySelectorAll("#edit-koder-form input");
    let editedKoder = {};

    editFields.forEach(({name, value}) => {
        editedKoder[name] = value;
    });

    await editKoderById(key, editedKoder);
    await getKoders();
    editModal.hide();
});
// fin de los listeners

// Creación de elementos HTML
const createKoderItem = (koderObject) => {
    
    let {name, lastname, key} = koderObject;
    let koderItem = document.createElement("li");
    koderItem.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "gap-3"
    );

    let koderName = document.createElement("span");
    koderName.classList.add("flex-grow-1");
    //buscar manera de reemplazar innerText por que es mala practica
    koderName.innerText = `${name} ${lastname}`;

    //Botón editar koder
    let editBtn =document.createElement("button");
    editBtn.classList.add("btn","btn-primary", "text-center");
    //Investigar función de innerHTML
    editBtn.innerHTML = "&#x270E;";
    
    editBtn.addEventListener("click", () => {
        document.getElementById("edit-name").value = name;
        document.getElementById("edit-lastname").value = lastname;
        document.getElementById("save-changes-btn").dataset.koderKey = key;
        editModal.show();
    });

   // Boton eliminar koder
   let deleteBtn =document.createElement("button");
   deleteBtn.classList.add("btn","btn-danger", "text-center");
   deleteBtn.innerText = "X";

   deleteBtn.addEventListener("click", async () => {
    await deleteKoderById(key);
    await getKoders();
   });

   koderItem.append(koderName,editBtn, deleteBtn);

   return koderItem;
};

const printKoders =(kodersArray,wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    wrapper.innerHTML = "";
    kodersArray.forEach((koder) => wrapper.append(createKoderItem(koder)));
}

getKoders();