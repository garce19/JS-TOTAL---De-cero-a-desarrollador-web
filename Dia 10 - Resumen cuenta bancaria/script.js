function obtenerDatos() {
    fetch('./data/resumen.json')
    .then(res => res.json())
    .then(function(datos) {
        document.getElementById('banco').textContent = datos.banco;
        document.getElementById('ciudad').textContent = datos.sucursal;
        document.getElementById('nombre').textContent = datos.titular;
        document.getElementById('nroCuenta').textContent = datos.nro_cuenta
        document.getElementById('montoDolares').textContent = datos.saldo[0].monto + ' USD'
        document.getElementById('montoEuros').textContent = datos.saldo[1].monto + ' EUR'
        document.getElementById('cbu').textContent = datos.cbu
        document.getElementById('apertura').textContent = datos.abierto
    })
    .catch(function(error) {alert(error)});
}

