async function iniciarSitio() {
    cargarLogo()
    cargarTitulo()
    cargarTextos()
    mostrarDatos()
}


async function obtenerArs() {
    let respuesta = await fetch('https://open.er-api.com/v6/latest/ARS');
    let resultado = await respuesta.json();
    return resultado
}

async function obtenerCurrentPrice() {
    let respuesta = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    let resultado = await respuesta.json();
    return resultado
}

async function obtenerUSD() {
    let respuesta = await fetch('https://open.er-api.com/v6/latest/USD')
    let resultado = await respuesta.json()
    return resultado
}

function cargarLogo() {
    let elementoImagen = document.getElementById('logo')
    elementoImagen.setAttribute('src', './images/logo_cotizaciones.png')
}

function cargarTitulo() {
    let elementoTitulo = document.getElementById('tituloPagina')
    elementoTitulo.textContent = 'Cotizaciones Online'
}

async function mostrarDatos() {
    mostrarCarga()
    await delay(2500);
    
    try {
        let currentprice = await obtenerCurrentPrice();
        let elementoPrice = document.getElementById('BitcoinUSD').append(currentprice.bpi.USD.rate)
    } catch (error) {
        console.error(error)
    }

    try {
        let usd = await obtenerUSD();
        let elementoUSD = document.getElementById('UsdEur').append(usd.rates.EUR)
    } catch (error) {
        console.error(error)
    }
    try {
        let ars = await obtenerArs();
        let elementoARS = document.getElementById('UsdArs').append(ars.rates.USD)
    } catch (error) {
        console.error(error)
    }
    ocultarCarga()
    
}


function mostrarCarga() {
    let elementoGif = document.getElementById('imgEspera')
    elementoGif.setAttribute('src', './images/loading.gif')
    elementoGif.style.visibility = 'visible'
}

function ocultarCarga() {
    let elementoGif = document.getElementById('imgEspera')
    elementoGif.style.visibility = 'hidden'
}

function cargarTextos() {
    document.getElementById('UsdEur').append('EUR a USD: ')
    document.getElementById('UsdArs').append('ARG a USD: ')
    document.getElementById('BitcoinUSD').append('EUR a USD: ')
}

function delay(ms) {
    return new Promise(function(res) {
        setTimeout(res, ms);
    })
}