// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Añadir amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (!nombreAmigo) {
        alert('Ingresa algún nombre');
        return;
    } else {
        //Añadimos el nombre capturado a la lista amigos
        amigos.push(nombreAmigo);

        //Mostrar amigos
        mostrarAmigos();

        console.log(amigos);
    }
}

//Mostrar lista de amigos
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

//Añadimos el listado    
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
        document.getElementById('amigo').value = "";
    }
}

//Sorteto de amigos
function sortearAmigo() {
    let totalAmigos = amigos.length;
    let resultado = document.getElementById('resultado');

    if (totalAmigos > 0) {
        // Índice para sortear amigo
        let indice = Math.floor(Math.random() * totalAmigos);
        let nombre = amigos[indice];

        // Elimina el amigo sorteado del arreglo
        amigos.splice(indice, 1);
        resultado.innerHTML = `<p>${nombre}</p>`;
    } else {
        alert('Ingresa datos para realizar un sorteo');
    }
}