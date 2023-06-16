        function registerUser() {
            // Obtener los datos del formulario de registro
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
        
            // Obtener el elemento para mostrar el mensaje
            let messageElement = document.getElementById('message');
        
            // Validar que se hayan ingresado datos
            if (username.trim() === '' || password.trim() === '') {
            // Mostrar un mensaje de error si faltan datos
            messageElement.textContent = 'Por favor, ingrese todos los campos.';
            messageElement.classList.remove('success');
            messageElement.classList.add('error');
            return; // Detener la ejecución si faltan datos
        }

            // Validar la longitud de la contraseña
            if (password.length < 6) {
            messageElement.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            messageElement.classList.remove('success');
            messageElement.classList.add('error');
            return; // Detener la ejecución si la contraseña es demasiado corta
        }
            // Crear un objeto de usuario
            let user = {
                username: username,
                password: password
            };
        
            // Convertir el objeto de usuario a JSON
            let userData = JSON.stringify(user);
        
            // Guardar los datos del usuario en el localStorage
            localStorage.setItem('userData', userData);

            localStorage.setItem('isLoggedIn', 'true');

        
            // Mostrar un mensaje de éxito
            messageElement.textContent = '¡Registro exitoso!';
            messageElement.classList.remove('error');
            messageElement.classList.add('success');
        
            // Redirigir al usuario a otra página después de 2 segundos
            setTimeout(function() {
                window.location.href = 'welcome.html';
            }, 2000);
            }