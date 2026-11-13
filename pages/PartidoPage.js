const { BasePage } = require('./BasePage');

class PartidoPage extends BasePage {
constructor(page) {
super(page);
this.selectEquipoLocal = page.locator('#equipo-local');
this.selectEquipoVisitante = page.locator('#equipo-visitante');
this.inputGolesLocal = page.locator('#goles-local');
this.inputGolesVisitante = page.locator('#goles-visitante');
this.btnRegistrarPartido = page.locator('#btn-registrar-partido');
this.mensajeConfirmacion = page.locator('.mensaje-confirmacion');
}

async registrarPartido(equipoLocal, equipoVisitante, golesLocal, golesVisitante) {
await this.selectEquipoLocal.selectOption(equipoLocal);
await this.selectEquipoVisitante.selectOption(equipoVisitante);
await this.inputGolesLocal.fill(String(golesLocal));
await this.inputGolesVisitante.fill(String(golesVisitante));
await this.btnRegistrarPartido.click();
}

obtenerMensajeConfirmacion() {
return this.mensajeConfirmacion;
}
}

module.exports = { PartidoPage };
