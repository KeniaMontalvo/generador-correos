const advertenciaGeneral = document.getElementById("advertenciaCopy");
    
    function resetearMensajes() {
        advertenciaCopy.innerHTML = "";
    }
    
    function mostrarAdvertencia(elemento, mensaje) {
      elemento.innerHTML = mensaje;
      setTimeout(() => {
        elemento.innerHTML = "";
      }, 3000);
    }

function generarCorreo() {
    resetearMensajes();

    const monto = document.getElementById("monto").value;
    const nombre = document.getElementById("nombre").value;
    const producto = document.getElementById("producto").value;
    const saldo = document.getElementById("saldo").value;
    const metodo = document.getElementById("metodo").value;
    const pedido = document.getElementById("pedido").value;
    //const link = document.getElementById("link").value;

    const estadoPago = saldo === "00.00" ? "Pagado" : `Saldo pendiente: $${saldo}`;

    const texto = `¡Hola ${nombre}!\n\n ¡Confirmamos tu pedido #${pedido}! 💚\n\nAbono recibido: $${monto}\nProducto: ${producto}\nEstado: ${estadoPago}\n\nMétodo de entrega: ${metodo}.\n\nSeguimiento: https://goo.su/RnHW \n\n¡Gracias por tu confianza! Esperamos que disfrutes tu compra. 🥰`;
    document.getElementById("resultado").value = texto;
  }

  function copiarTexto() {
    resetearMensajes();
    const texto = document.getElementById("resultado");
    
    if (!texto.value) {
      mostrarAdvertencia(advertenciaCopy, "⚠️ Primero genera un correo");
      return;
    }
    
    texto.select();
    document.execCommand("copy");
    mostrarAdvertencia(advertenciaCopy, "✓ Texto copiado al portapapeles");
  }

  function limpiarCampos() {
    // Limpiar inputs
    document.getElementById("nombre").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("saldo").value = "";
    document.getElementById("metodo").value = "";
    document.getElementById("pedido").value = "";
    document.getElementById("link").value = "";
    
    // Limpiar resultado y mensajes
    document.getElementById("resultado").value = "";
    resetearMensajes();
    
    // Opcional: Dar foco al primer campo
    document.getElementById("nombre").focus();
  }