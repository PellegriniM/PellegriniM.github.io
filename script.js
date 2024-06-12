const usuarioPermitido = "juan";

function capitalizarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.substring(1);
}

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
            pantalla.innerHTML = "La pagina solo se podra abrir el dia 12 de Junio"
        }
        else {
            pantalla.innerHTML = `Huy quien entro aca?`
            setTimeout(cumple, 3000);
        }



    }
}

function verificarFecha() {
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // El mes es devuelto de 0 a 11, sumamos 1 para ajustar

    if (dia === 12 && mes === 6) {
        console.log("¡Hoy es el 12 de junio!");
        return true;
    } else {
        console.log("La fecha actual no es el 12 de junio.");
        return false;
    }
}

function cumple() {

    document.getElementById('login').style.display = 'none';
    document.getElementById('contenido').classList.remove('oculto');

    document.title = "FELIZ CUMPLE JUANCHO!"
}

