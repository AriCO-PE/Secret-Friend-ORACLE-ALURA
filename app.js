let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    input.value = ""; 
    input.focus();    
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let copia = [...amigos];
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let posibles = copia.filter((nombre) => nombre !== amigos[i]);
        
        if (posibles.length === 0) {
            alert("No hay suficientes amigos para sortear. Intenta de nuevo.");
            resultado = [];
            return sortearAmigo();
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(`${amigos[i]} → ${elegido}`);
        copia.splice(copia.indexOf(elegido), 1);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(parejas) {
    const ul = document.getElementById('resultado');
    ul.innerHTML = "";

    parejas.forEach((linea) => {
        const li = document.createElement('li');
        li.textContent = linea;
        ul.appendChild(li);
    });
}
