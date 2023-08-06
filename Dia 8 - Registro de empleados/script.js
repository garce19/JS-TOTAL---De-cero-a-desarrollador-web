let listaEmpleados = []

function Empleado(documento, nombre, apellido, fechaNacimiento, cargo) {
    this.documento = documento,
    this.nombre = nombre,
    this.apellido = apellido,
    this.fechaNacimiento = fechaNacimiento,
    this.cargo = cargo
}


function crearEmpleado() {
    let documento = document.getElementById('documento').value
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let fechaNacimiento = document.getElementById('fechaNacimiento').value
    let cargo = document.getElementById('cargo').value

    let nuevoEmpleado = new Empleado(documento, nombre, apellido, fechaNacimiento, cargo);
    alert('Empleado creado con éxito')
    cargarEmpleado(nuevoEmpleado);

    // Vaciar los inputs después de crear el empleado
    limpiarCampos()
    return nuevoEmpleado;
}

function cargarEmpleado(empleado) {
    listaEmpleados.push(empleado);

    alert('Empleado cargado con éxito')
    console.log(listaEmpleados)
}

function mostrarEmpleados() {
    let lista = ''
    for (let empleado of listaEmpleados) {
        for (let propiedad in empleado) {
            lista += `${propiedad.toUpperCase()}: ${empleado[propiedad]},`
        }
        lista += '\n'
    }
    alert(lista)
}

function limpiarCampos() {
    document.getElementById('documento').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('cargo').value = '';
}

