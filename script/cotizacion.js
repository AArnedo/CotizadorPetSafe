const cotizarSeguro = () => {
  let mascota = document.querySelector("#mascota").value;
  let edad = document.querySelector("#edad").value;
  let raza = document.querySelector("#raza").value;
  let basico = document.querySelector("#basico");
  let intermedio = document.querySelector("#intermedio");
  let premium = document.querySelector("#premium");

  let plan = "";

  if (basico.checked) {
    plan = "basico";
  } else if (intermedio.checked) {
    plan = "intermedio";
  } else if (premium.checked) {
    plan = "premium";

    if (mascota === "" || edad === "" || raza === "" || plan === "") {
      mostrarError("#mensaje_error", "FALTA SELECCIONAR ALGUNAS OPCIONES!");
      return;
    }
  }

  divResumen


};

const mostrarError = (elemento, mensaje) => {
  divError = document.querySelector(elemento);
  divError.innerHTML = `<p class="alerta-error">${mensaje}<p>`;
  setTimeout(() => {
    divError.innerHTML = ``;
  }, 2000);
};
