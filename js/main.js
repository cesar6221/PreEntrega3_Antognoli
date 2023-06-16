
    document.addEventListener('DOMContentLoaded', function () {
        function Mascota(raza, edad, tamano) {
            this.raza = raza;
            this.edad = edad;
            this.tamano = tamano;
        }
    
        function mostrarDatosMascota(mascota) {
            const datosUsuarioCliente =
                "Raza ingresada: " +
                mascota.raza +
                "\n" +
                "Edad: " +
                mascota.edad +
                "\n" +
                "Tamaño: " +
                mascota.tamano;
    
            const datosMascotaElement = document.getElementById('datos-mascota');
            datosMascotaElement.textContent = datosUsuarioCliente;
        }
        
    
        function mostrarAlimentos(mascota) {
            const opciones = [
                { marca: "Agility perro adulto", peso: "20 kilos", precio: "15.000" },
                { marca: "Dog Chow perro adulto", peso: "20 kilos", precio: "17.000" },
                { marca: "Pedigree perro adulto", peso: "20 kilos", precio: "22.000" },
                { marca: "Royal Canin perro adulto", peso: "20 kilos", precio: "24.000" },
                { marca: "Pro-plan perro adulto", peso: "20 kilos", precio: "25.000"},
                { marca: "Dog Selection cachorros", peso: "15 kilos", precio: "15.000"},
                { marca: "Infinity cachorros", peso: "15 kilos", precio: "12.000"},
                { marca: "Excellent cachorros", peso: "15 kilos", precio: "9.500"},
                { marca: "Pedigree cachorros", peso: "15 kilos", precio: "13.000"},
                { marca: "Dog Chow cachorros", peso: "x 100 grs", precio: "250"},
                { marca: "Excellent gato adulto", peso: "7.5 kilos", precio: "16.000"},
                { marca: "Pro-plan gato adulto", peso: "7.5 kilos", precio: "18.000"},
                { marca: "Royal Canin gato", peso: "7.5 kilos", precio: "19.800"},
            ];
    
            const opcionesAlimentosElement = document.getElementById('opciones-alimentos');
            opcionesAlimentosElement.textContent = "Opciones de alimentos disponibles:";
    
            for (let i = 0; i < opciones.length; i++) {
                const opcion = opciones[i];
                const opcionElement = document.createElement('p');
                opcionElement.textContent = (i + 1) + ": " + opcion.marca + ": " + "x " + opcion.peso + ", $" + opcion.precio;
                opcionesAlimentosElement.appendChild(opcionElement);
            }
            mostrarAlimentos();
    
            const opcionesAlimentosInput = document.getElementById('opciones-alimentos-input');
            const buscarMarcaInput = document.getElementById('buscar-marca-input');
    
            const form = document.getElementById('form-alimentos');
            form.addEventListener('submit', function (event) {
                event.preventDefault();
    
                const seleccion = parseInt(opcionesAlimentosInput.value);
                if (seleccion >= 1 && seleccion <= opciones.length) {
                    const seleccionado = opciones[seleccion - 1];
                    const resultadoCompra =
                        mascota.raza +
                        " " +
                        mascota.tamano +
                        " " +
                        mascota.edad +
                        " eligió " +
                        seleccionado.marca +
                        " x " +
                        seleccionado.peso +
                        " a $" +
                        seleccionado.precio;
    
                    const resultadoCompraElement = document.getElementById('resultado-compra');
                    resultadoCompraElement.textContent = resultadoCompra;
    
                    const buscarMarca = buscarMarcaInput.value.toLowerCase();
                    const resultadosBusqueda = opciones.filter((opcion) =>
                        opcion.marca.toLowerCase().includes(buscarMarca)
                    );
    
                    const resultadosBusquedaElement = document.getElementById('resultados-busqueda');
                    resultadosBusquedaElement.innerHTML = "";
    
                    if (resultadosBusqueda.length > 0) {
                        const resultadosTitulo = document.createElement('p');
                        resultadosTitulo.textContent = "Resultados de búsqueda:";
                        resultadosBusquedaElement.appendChild(resultadosTitulo);
    
                        for (let i = 0; i < resultadosBusqueda.length; i++) {
                            const opcion = resultadosBusqueda[i];
                            const opcionElement = document.createElement('p');
                            opcionElement.textContent = opcion.marca + ": x " + opcion.peso + ", $" + opcion.precio;
                            resultadosBusquedaElement.appendChild(opcionElement);
                        }
                    } else {
                        const noResultadosElement = document.createElement('p');
                        noResultadosElement.textContent = "No se encontraron resultados para la marca ingresada.";
                        resultadosBusquedaElement.appendChild(noResultadosElement);
                    }
                } else {
                    const errorElement = document.getElementById('error');
                    errorElement.textContent = "La opción ingresada no es correcta. Por favor, vuelva a intentarlo.";
                }
            });
        }
    
        // Obtener referencias a elementos del DOM y asignar event listeners
    
        const formDatos = document.getElementById('form-datos');
        formDatos.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const razaInput = document.getElementById('raza-input');
            const edadInput = document.getElementById('edad-input');
            const tamanoInput = document.getElementById('tamano-input');
    
            const mascota = new Mascota(razaInput.value, edadInput.value, tamanoInput.value);
    
            mostrarDatosMascota(mascota);
        });
    });
    
