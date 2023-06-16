    document.addEventListener("DOMContentLoaded", function() {
        const botonesCompra = document.getElementsByClassName("comprar-btn");
        for (let i = 0; i < botonesCompra.length; i++) {
        const boton = botonesCompra[i];
        boton.addEventListener("click", handleCompra);
        }
    
        function handleCompra(event) {
        const boton = event.target;
        const card = boton.parentElement;
        const imagen = card.querySelector("img");
        const nombreProducto = imagen.alt;
    
        // Mostrar mensaje de compra con SweetAlert
        Swal.fire({
            title: "¡Producto comprado!",
            text: "Has comprado el producto: " + nombreProducto,
            icon: "success",
            confirmButtonText: "Aceptar"
        });
        }
    });
    