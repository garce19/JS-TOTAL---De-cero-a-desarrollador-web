
function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca,
        this.modelo = modelo,
        this.color = color,
        this.anio = anio,
        this.titular = titular
}

Automovil.prototype.venderAutomovil = function () {
    let nuevoTitular = prompt('Ingrese el nombre del nuevo titular')
    this.titular = nuevoTitular;
}

Automovil.prototype.verAuto = function () {
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
}

Automovil.prototype.encender = function () {
    alert('El automóvil fue encendido');
}

let auto1 = new Automovil('Chevrolet', 'Camaro', 'Negro', 2018, 'Camilo Rojas')
let auto2 = new Automovil('Toyota', 'Corolla', 'Azul', 2021, 'Carlos García')
let auto3 = new Automovil('Ford', 'Focus', 'Rojo', 2015, 'Paula Ramírez')


let listaAutos = [auto1, auto2, auto3]

function mostrarAutos() {
    let listaInfo = document.getElementById('infoAutos')
    for (let auto of listaAutos) {
       let elementoLiAuto = document.createElement('li')
       elementoLiAuto.textContent = auto.verAuto()
       listaInfo.appendChild(elementoLiAuto)
    }
}



