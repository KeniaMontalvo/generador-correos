function generarCorreo() {
    const monto = document.getElementById("monto").value;
    const producto = document.getElementById("producto").value;
    const saldo = document.getElementById("saldo").value;
    const metodo = document.getElementById("metodo").value;
    const pedido = document.getElementById("pedido").value;
    const link = document.getElementById("link").value;

    const texto = `¡Confirmo de recibido! 💚\n\nAbono: $${monto}\nProducto: ${producto}\nEstado: Restante por liquidar $${saldo}\n\nMétodo de entrega: ${metodo}.\n\nPedido #${pedido} ${link}\n\n¡Muchas gracias por la confianza! 🥰`;
    document.getElementById("resultado").value = texto;
  }

  function copiarTexto() {
    const texto = document.getElementById("resultado");
    texto.select();
    document.execCommand("copy");
    alert("¡Texto copiado! Pégalo en tu correo.");
  }