class BasePage {
constructor(page) {
this.page = page;
}

async navegarA(url) {
await this.page.goto(url);
}

async capturarPantalla(nombreArchivo) {
await this.page.screenshot({ path: evidencias/${nombreArchivo}.png });
}

async esperarCarga() {
await this.page.waitForLoadState('networkidle');
}
}

module.exports = { BasePage };
