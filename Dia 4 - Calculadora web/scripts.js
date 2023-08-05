function sumar() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(n1 + n2)
}

function restar() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(n1 - n2)
}

function multiplicar() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(n1 * n2)
}

function dividir() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(n1 / n2)
}

function raiz() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(Math.sqrt(n1))
}

function potencia() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(Math.pow(n1, n2))
}

function absoluto() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(Math.abs(n1))
}

function randomFun() {
    let n1 = +document.getElementById('numero1').value
    let n2 = +document.getElementById('numero2').value

    mostrarResultado(Math.floor(Math.random() * ((n2 + 1) - n1) + n1))
}

function redondear() {
    let n1 = +document.getElementById('resultado').value

    mostrarResultado(Math.round(n1))
}

function redondearAbajo() {
    let n1 = +document.getElementById('resultado').value

    mostrarResultado(Math.floor(n1))
}

function redondearArriba() {
    let n1 = +document.getElementById('resultado').value

    mostrarResultado(Math.ceil(n1))
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = resultado;
}

