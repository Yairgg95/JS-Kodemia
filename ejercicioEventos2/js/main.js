
    let usuarios = [];

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const correoExiste = usuarios.some(usuario => usuario.email === email);

        if (!correoExiste) {
            const nuevoUsuario = {
                name: name,
                email: email,
                password: password
            };

            usuarios.push(nuevoUsuario);

            document.getElementById('myForm').reset();

            actualizarListaUsuarios();
        } else {
            alert('El correo electrónico ya está registrado.');
        }
    });

    function actualizarListaUsuarios() {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        usuarios.forEach(function(usuario) {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${usuario.name}, Email: ${usuario.email}, Contraseña: ${usuario.password}`;
            li.className = 'list-group-item';
            userList.appendChild(li);
        });
    }

    actualizarListaUsuarios();
