
let amigos = [];
let lista = document.getElementById('listaAmigos');
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
    return;
}

function sortearAmigo() {
  if (amigos.length == 0) 
        alert("Agrega amigos para sortear");
 let aleatorio = Math.floor(Math.random() * amigos.length);
 let amigoSorteado = amigos[aleatorio];
 let resultadoAmigo = document.getElementById('resultado');
 resultadoAmigo.innerHTML = `Amigo sorteado: ${amigoSorteado}`
 lista.innerHTML = "";
    return;
                          
}

function limpiarCaja() {
    document.getElementById('amigo').value = "";
}

function añadirArreglo(valor) {
    amigos.push(valor);
}

function listarAmigos() {
    lista.innerHTML = "";

for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`; 
  }
}


 
