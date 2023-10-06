/**@author Enrique fernandez campoamor
 * Github:
 */

const validationNombre = nombre => {
  if (nombre === " ") {
    alert("el nombre no puede estar vacio")
    return false
  }
  return true
}

const validarContraseña = password => {
  if (password.lenght < 8) {
    alert("La contraseña debe tener al menos 8 caracteres")
    return false
  }
  return true
}

document.getElementById("formReg").onsubmit = () => {
  return validarFormulario()
}

const validarFormulario = () => {
  const nombre = document.getElementById("nombre").value
  const password = document.getElementById("password").value

  return validationNombre(nombre) && validarContraseña(password)
}

const enviarFormulario = () => {
  if (validarFormulario()) {
    return true
  } else {
    return false
  }
}
