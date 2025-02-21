let listaAmigos = [];

// Función para agregar  amigo a la lista--
function agregarAmigo() {
  const inputNombre = document.getElementById('nombreAmigo');
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
  } else if (listaAmigos.includes(nombre)) {
    alert("Este amigo ya ha sido agregado.");
  } else {
    listaAmigos.push(nombre);
    actualizarListaAmigos();
    inputNombre.value = ""; // Limpiar el campo de entrada
  }
}

// Función para actualizar la lista visual de amigos--
function actualizarListaAmigos() {
  const listaElement = document.getElementById('listaAmigos');
  listaElement.innerHTML = ""; // Limpiar la lista actual

  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaElement.appendChild(li);
  });
}

// Función para realizar el sorteo--
function sortearAmigoSecreto() {
  if (listaAmigos.length === 0) {
    alert("No hay suficientes amigos para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[indiceAleatorio];

  document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
}

// Asignar eventos a los botones--
document.getElementById('btnAgregarAmigo').addEventListener('click', agregarAmigo);
document.getElementById('btnSortear').addEventListener('click', sortearAmigoSecreto);