const { BasePage } = require('./BasePage');

class TablaPosicionesPage extends BasePage {
constructor(page) {
super(page);
this.tablaPosiciones = page.locator('#tabla-posiciones');
}

async obtenerPuntosEquipo(nombreEquipo) {
await this.tablaPosiciones.waitFor({ state: 'visible' });
const filas = this.tablaPosiciones.locator('tbody tr');
const cantidadFilas = await filas.count();

for (let i = 0; i < cantidadFilas; i++) {
const fila = filas.nth(i);
const nombreEnFila = await fila.locator('td').nth(0).innerText();
if (nombreEnFila.trim() === nombreEquipo.trim()) {
const puntos = await fila.locator('td').nth(4).innerText();
return parseInt(puntos.trim(), 10);
}
}
throw new Error(Equipo no encontrado en la tabla: ${nombreEquipo});
}
}

module.exports = { TablaPosicionesPage };
