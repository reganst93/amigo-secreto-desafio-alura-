let amigos = [];
function agregarAmigo() {
    //obtenemos lo ingresado por el usuario
    let nombre = document.getElementById("amigo").value;
    //aca verificamos si esta en blanco, si es asi se genera una alerta, si no se hace un push a la lista amigos.
    if (nombre === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombre);
    }
    document.getElementById("amigo").value = "";
}
