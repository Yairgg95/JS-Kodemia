
document.addEventListener('DOMContentLoaded', () => {
  let storedUserData = localStorage.getItem('userData');
  let userData = storedUserData ? JSON.parse(storedUserData) : null;

  const hideElement = (elementId) => {
    let element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'none';
    }
  };

  const showElement = (elementId) => {
    let element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'block';
    }
  };

  
  if (userData) {
    hideElement('container-login-user'); 
    showElement('container-welcome-card'); 
  } else {
    showElement('container-login-user'); 
    hideElement('container-welcome-card'); 
  }

  
  let inputs = document.querySelectorAll("#login-user input");

  
  let saveEntryBtn = document.getElementById("save-btn");

  
  saveEntryBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let userEntry = {};
   
    inputs.forEach((input) => {
      userEntry[input.name] = input.value;
    });

  
    localStorage.setItem('userData', JSON.stringify(userEntry));

    
    userData = userEntry;

    
    hideElement('container-login-user');
    showElement('container-welcome-card');

   
    console.log("Datos del usuario guardados:", userEntry);
  });
});

