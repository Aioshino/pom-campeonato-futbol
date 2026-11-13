function formatearFecha(fecha) {
return fecha.toISOString().split('T')[0];
}

function generarNombreEvidencia(prefijo) {
const timestamp = Date.now();
return ${prefijo}_${timestamp};
}

module.exports = { formatearFecha, generarNombreEvidencia };
