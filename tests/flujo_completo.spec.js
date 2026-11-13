const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PartidoPage } = require('../pages/PartidoPage');
const { TablaPosicionesPage } = require('../pages/TablaPosicionesPage');
const { generarNombreEvidencia } = require('../utils/helpers');

test('Flujo completo: registrar partido y verificar tabla de posiciones', async ({ page }) => {
const loginPage = new LoginPage(page);
const partidoPage = new PartidoPage(page);
const tablaPage = new TablaPosicionesPage(page);

await loginPage.navegarA('/login');
await loginPage.iniciarSesion('admin', 'admin123');
await loginPage.esperarCarga();

await partidoPage.navegarA('/partidos/registrar');
await partidoPage.registrarPartido('Equipo A', 'Equipo B', 3, 1);
await expect(partidoPage.obtenerMensajeConfirmacion()).toBeVisible();
await partidoPage.capturarPantalla(generarNombreEvidencia('registro_partido'));

await tablaPage.navegarA('/tabla-posiciones');
await tablaPage.esperarCarga();

const puntosEquipoA = await tablaPage.obtenerPuntosEquipo('Equipo A');
const puntosEquipoB = await tablaPage.obtenerPuntosEquipo('Equipo B');

expect(puntosEquipoA).toBeGreaterThan(puntosEquipoB);
expect(puntosEquipoA).toBe(3);
expect(puntosEquipoB).toBe(0);

await tablaPage.capturarPantalla(generarNombreEvidencia('tabla_posiciones'));
});

Archivo: package.json (en la raíz)

{
"name": "pom-campeonato-futbol",
"version": "1.0.0",
"description": "Framework de pruebas automatizadas con Page Object Model para el Sistema de Gestion de Campeonato de Futbol",
"main": "index.js",
"scripts": {
"test": "playwright test"
},
"devDependencies": {
"@playwright/test": "^1.40.0"
}
}
