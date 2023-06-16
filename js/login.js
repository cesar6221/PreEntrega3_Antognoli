document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // buscar el usuario en la lista de usuarios registrados

        const user = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            // Si los datos son válidos, redirecciona al usuario a otra página después de 2 segundos
            setTimeout(function() {
                window.location.href = "welcome.html";
            }, 2000);
        } else {
            // Reemplazar alert por SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Credenciales incorrectas',
                text: 'Inténtalo nuevamente.'
            });
        }
    });
});
