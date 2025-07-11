let preguntas = [];
let respuestas = [];
let colores = ['#F2F230', '#FFA69E', '#7EE8FA', '#C2F261'];

const formulario = document.getElementById('formulario');
const input = document.getElementById('preguntas');
const input2 = document.getElementById('respuestas');
const lista = document.querySelector('.contenedor-tarjetas');

function mostrarTarjetas() {
    lista.innerHTML = ''; 
    preguntas.forEach((pregunta, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        tarjeta.style.backgroundColor = colores[index % colores.length]; 
        tarjeta.innerHTML = `<strong>Pregunta:</strong> ${pregunta}<br>
                             <strong>Respuesta:</strong> ${respuestas[index]}`;
        lista.appendChild(tarjeta);
    });
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const pregunta = input.value.trim();
    const respuesta = input2.value.trim();
    if(pregunta==='' || respuesta === ''){
        alert('Por favor, completa ambos campos.'); 
        return;
    }
    preguntas.push(pregunta);
    respuestas.push(respuesta);
    input.value = '';
    input2.value = '';
    mostrarTarjetas();
});