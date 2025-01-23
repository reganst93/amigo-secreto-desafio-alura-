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

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        //aca creara un elemento nuevo para cada amigo
        let amigoEnLi = document.createElement("li");

        //aca asigna el nombre del amigo agregado a un elemento li
        amigoEnLi.textContent = amigos[i];

        lista.appendChild(amigoEnLi);
    }

}