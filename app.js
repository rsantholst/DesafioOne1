
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo').value;
    
    if (input !== "") {
     añadirArreglo(input);
     listarAmigos();   
    } else {
      alert('Por favor, inserte un nombre'); 
    }
    console.log(amigos);
    limpiarCaja();
}

function sortearAmigo() {

}


function limpiarCaja() {
    document.getElementById('amigo').value = "";
}

function añadirArreglo(valor) {
    amigos.push(valor);
}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`; 
  }
}