    // Obtener referencias a los elementos del formulario 
    const formElement = document.getElementById('form');
    const razaInput = document.getElementById('raza');
    const edadInput = document.getElementById('edad');
    const tamanoInput = document.getElementById('tamano');
    const datosMascotaElement = document.getElementById('datos-mascota');
    const editarDatosButton = document.getElementById('editar-datos');
    const buscarMarcaInput = document.getElementById('buscar-marca');
    const buscarMarcaButton = document.getElementById('buscar-marca-btn');
    const resultadosBusquedaElement = document.getElementById('resultados-busqueda');

    // Manejador del evento submit del formulario
    formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados por el usuario
    const raza = razaInput.value;
    const edad = edadInput.value;
    const tamano = tamanoInput.value;

    // Mostrar los datos de la mascota en el elemento correspondiente
    datosMascotaElement.textContent = `Tipo de mascota: ${raza}, Edad: ${edad}, Tamaño: ${tamano}`;

    // Limpiar los campos del formulario
    razaInput.value = '';
    edadInput.value = '';
    tamanoInput.value = '';
    });

    // Manejador del evento click del botón "Editar datos"
    editarDatosButton.addEventListener('click', function() {
    // Limpiar los datos de la mascota y restablecer los valores en los campos del formulario
    datosMascotaElement.textContent = '';
    razaInput.value = '';
    edadInput.value = '';
    tamanoInput.value = '';
    });

    // Manejador del evento click del botón "Buscar"
    buscarMarcaButton.addEventListener('click', function() {
    const marca = buscarMarcaInput.value;
    
    // Realizar la búsqueda de la marca y mostrar los resultados en el elemento 
    resultadosBusquedaElement.textContent = `Resultados de búsqueda para la marca: ${marca}`;

    // Limpiar el campo de búsqueda
    buscarMarcaInput.value = '';
    });
