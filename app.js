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

        //Mostrar lista de amigos
        mostrarAmigos();

        console.log(amigos);
    }
}