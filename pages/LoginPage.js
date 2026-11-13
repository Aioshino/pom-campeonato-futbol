const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
constructor(page) {
super(page);
this.inputUsuario = page.locator('#usuario');
this.inputPassword = page.locator('#password');
this.btnIngresar = page.locator('#btn-ingresar');
this.mensajeError = page.locator('.mensaje-error');
}

async iniciarSesion(usuario, password) {
await this.inputUsuario.fill(usuario);
await this.inputPassword.fill(password);
await this.btnIngresar.click();
}

obtenerMensajeError() {
return this.mensajeError;
}
}

module.exports = { LoginPage };
