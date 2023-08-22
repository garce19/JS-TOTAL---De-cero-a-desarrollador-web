let archivo = './data/peliculas.json';
let listaArchivos = document.getElementById('listaArchivos');
let elementoInput = document.getElementById('entradaUsuario')
let botonBusqueda = document.getElementById('btnBuscar');
let listaResultados = document.getElementById('listaResultados')

listaArchivos.addEventListener('change', seleccionarArchivo)

function seleccionarArchivo() {
    let archivoElegido = listaArchivos.value;
    fetch(archivoElegido)
    .then(res => res.json())
    .then(function(datos) {
        archivo = datos.data
    })
    .catch(function(error) {alert(error)})
    alert(`Se modificó el archivo base a ${archivoElegido}`)
}

elementoInput.addEventListener('keydown', function(event) {
    let entrada = event.key;
    if (entrada !== 8 && entrada !== ' ' && (entrada < 65 || entrada > 90)) {
        event.preventDefault();
    }
})

botonBusqueda.addEventListener('click', function() {
    listaResultados.innerHTML = ''
    for (let info of archivo) {
        if (info.nombre.toUpperCase().startsWith(elementoInput.value.toUpperCase())){
            console.log(info)
            let elementoLista = document.createElement('li');
            let sinopsis = `Sinopsis: ${info.sinopsis}`
            let p = document.createElement('p')
            p.id = info.nombre
            p.style.display = 'none'
            p.innerHTML = sinopsis
            elementoLista.innerHTML = info.nombre;
            elementoLista.appendChild(p)
            elementoLista.addEventListener('mouseover', function() {
                let parrafo = document.getElementById(info.nombre);
                parrafo.style.display = 'block';
            })
            elementoLista.addEventListener('mouseout', function() {
                let parrafo = document.getElementById(info.nombre);
                parrafo.style.display = 'none';
            })
            
            listaResultados.appendChild(elementoLista);
        }
    }
})






