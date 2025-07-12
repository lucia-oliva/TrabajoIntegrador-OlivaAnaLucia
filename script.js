let preguntas = [];
let respuestas = [];
let colores = ['#F2F230', '#FFA69E', '#7EE8FA', '#C2F261'];

const formulario = document.getElementById('formulario');
const input = document.getElementById('preguntas');
const input2 = document.getElementById('respuestas');
const lista = document.querySelector('.contenedor-tarjetas');
const contadorPreguntas = document.getElementById('contador-preguntas');
const contadorRespuestas = document.getElementById('contador-respuestas');
const LIMITE_CARACTERES = 80;

input.addEventListener('input', () => {
    contadorPreguntas.textContent = `${input.value.length} / ${LIMITE_CARACTERES}`;
});

input2.addEventListener('input', () => {
    contadorRespuestas.textContent = `${input2.value.length} / ${LIMITE_CARACTERES}`;
});


function mostrarTarjetas() {
    lista.innerHTML = ''; 

    preguntas.map((pregunta, index) => {
        //Crear tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        //Para eliminar la tarjeta al hacer clic
        tarjeta.setAttribute('onclick', `eliminarTarjeta(${index})`);
        // Crear caras de la tarjeta
        const frente = document.createElement('div');
        frente.classList.add('cara', 'frente');
        frente.textContent = pregunta;
        frente.style.backgroundColor = colores[index % colores.length]; 
        const trasera = document.createElement('div');
        trasera.classList.add('cara', 'trasera');
        trasera.textContent = respuestas[index];
        tarjeta.appendChild(frente);
        tarjeta.appendChild(trasera);
        lista.appendChild(tarjeta);
        
    });
}

//Funcion eliminar 
function eliminarTarjeta(index) {
    preguntas.splice(index, 1);
    respuestas.splice(index, 1);
    mostrarTarjetas();
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
    contadorPreguntas.textContent = `0 / ${LIMITE_CARACTERES}`;
    contadorRespuestas.textContent = `0 / ${LIMITE_CARACTERES}`;
    mostrarTarjetas();
});