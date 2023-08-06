let notasEstudiante = [4.5, 7.8, 6.5, 9.7, 1.5]

function mostrarLista() {
    let elementoListaNotas = document.getElementById('listaNotas');
    for (let nota of notasEstudiante) {
        let itemLista = document.createElement('li');
        itemLista.innerText = nota;
        elementoListaNotas.appendChild(itemLista)
    }
}

function calcularPromedio() {
    let resultadoNotaAlta = document.getElementById('resultadoNotaAlta')
    resultadoNotaAlta.textContent = '';
    let resultadoPromedio = document.getElementById('resultadoPromedio')
    resultadoPromedio.textContent = '';
    let resultado = document.getElementById('resultadoPromedio')
    let promedio;
    let sumaNotas = 0;
    for (let nota of notasEstudiante) {
        sumaNotas += nota;
    }
    promedio = sumaNotas / notasEstudiante.length
    resultado.textContent = 'El promedio del estudiante es: ' + promedio;
}

function obtenerNotaMasAlta() {
    let resultadoAplazos = document.getElementById('resultadoAplazos')
    resultadoAplazos.textContent = '';
    let resultadoPromedio = document.getElementById('resultadoPromedio')
    resultadoPromedio.textContent = '';
    let resultado = document.getElementById('resultadoNotaAlta')
    let mayor = 0;
    let posicion = 0;
    while (posicion < notasEstudiante.length) {
        if (notasEstudiante[posicion] > mayor) {
            mayor = notasEstudiante[posicion];
        }
        posicion++;
    }
    resultado.textContent = 'La nota más alta del estudiante es: ' + mayor;
}

function establecerAplazos() {
    let resultadoNotaAlta = document.getElementById('resultadoNotaAlta')
    resultadoNotaAlta.textContent = '';
    let resultadoPromedio = document.getElementById('resultadoPromedio')
    resultadoPromedio.textContent = '';
    let resultado = document.getElementById('resultadoAplazos')
    for (var nota of notasEstudiante) {
        if (nota <= 4.0) {
            resultado.textContent = 'Sí hubo aplazos';
            break;
        } else {
            resultado.textContent = 'No hubo aplazos';
        }
    }
}