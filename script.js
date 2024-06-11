const usuarioPermitido = "juan"; // Nombre

function capitalizarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.substring(1);
}

// Principal
function ingresar(){

    const pantalla = document.getElementById("pantalla");
    const nombre = (document.getElementById("nombre").value).toLowerCase();

    if (nombre == "") {
        alert("Debes de ingresar un nombre!");
        return;
    }

    if (nombre != usuarioPermitido) {
        pantalla.innerHTML = `El usuario: ${capitalizarTexto(nombre)} no esta habilitado para entrar!`
    } else {
        if (!verificarFecha()) {
            pantalla.innerHTML = "La pagina solo se podra abrir el dia 11 de Junio"
        }
        else {
            pantalla.innerHTML = `Huy quien entro aca?`
            setTimeout(mensaje, 3000);
        }
    }
}
function verificarFecha() {
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;

    if (dia === 11 && mes === 6) {
        console.log("¡Hoy es el 11 de junio!");
        return true;
    } else {
        console.log("La fecha actual no es el 11 de junio.");
        return false;
    }
}

function mensaje() {

    document.getElementById('login').style.display = 'none';
    document.getElementById('contenido').classList.remove('oculto');

    document.title = "FELIZ CUMPLE JUANCHO!"
}