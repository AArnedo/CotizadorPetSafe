let plan = "";
/* Movimiento de paginas */
const movPage = document.querySelector(".movPage");
const btn_adelante = document.querySelector(".sigPage");
const btn_atras = document.querySelector(".volver-pag");
const btn_final = document.querySelector(".btn-finalizar");

/* Barra de progreso */
const progressText = document.querySelectorAll(".paso p");
const num = document.querySelectorAll(".paso .num");
const progressCheck = document.querySelectorAll(".paso .check");
let max = 2;
let cont = 1;

btn_adelante.addEventListener("click", function (e) {
  e.preventDefault();
  movPage.style.marginLeft = "-25%";
  num[cont - 1].classList.add("active");
  progressCheck[cont - 1].classList.add("active");
  progressText[cont - 1].classList.add("active");
  cont += 1;
});
btn_atras.addEventListener("click", function (e) {
  e.preventDefault();
  movPage.style.marginLeft = "0";
  num[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  cont -= 1;
});

/* Botón finalizar */
btn_final.addEventListener("click", function (e) {
  e.preventDefault();
  movPage.style.marginLeft = "-50%";

  let timerInterval;
  Swal.fire({
    title: "Estamos cotizando su Seguro..",
    html: "Aguarde algunos <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  setTimeout(() =>{
    let cotizacion = { mascota, edad, raza, plan };

    let cotizacionFinal = cotizar(cotizacion);
    divResultado.style.display = "block";
    divResultado.className = "divResultado";
    divResultado.innerHTML = `$${cotizacionFinal}`;
  },1000)

});
/* Cotización */
const cotizar = (cotizacion) => {
  const { mascota, edad, raza, plan }=cotizacion;
  let resultado = 2000;

    resultado=calcularMascota(mascota)+resultado;
    /* resultado=calcularEdad(edad)+resultado;
    resultado=calcularRaza(raza)+resultado;
    resultado=obtenerPlan(plan)+resultado; */
  
  return resultado
};

/* Lógica de Cotización */
const calcularMascota =(mascota)=>{
  return (mascota==='perro')?1000:500;
}

const calcularEdad =(edad)=>{
  let incremento;
  switch(edad){
    case 'año1': incremento=500;break;
    case 'año2': incremento=700;break;
    case 'año3': incremento=1000;break;
    case 'año4': incremento=1500;break;
  }
  return incremento;
}
const calcularRaza =(raza)=>{
  let resultadoMascota
  if (raza === "sinRaza") {
    resultadoMascota = 0;
  } else if (raza === "caniche" || "salchicha" || "schnauzer") {
    resultadoMascota = 500;
  } else if (raza === "pitbull" || "dogoArgentino" || "bulldog") {
    resultadoMascota = 1000;
  } else if (raza === "goldenRetriever") {
    resultadoMascota = 1200;
  }
  return resultadoMascota
}
const obtenerPlan =(plan)=>{
  let resultadoPlan;
  if(plan === 'basico'){
    resultadoPlan = 1500
  } else if (plan === 'intermedio'){
    resultadoPlan = 2000
  } else {
    resultadoPlan = 3000
  }
  return resultadoPlan
}

const mascota = document.querySelector("#mascota").value;
const edad = document.querySelector("#edad").value;
const raza = document.querySelector("#raza").value;
let basico = document.querySelector("#basico");
let intermedio = document.querySelector("#intermedio");
let premium = document.querySelector("#premium");

let divResultado = document.querySelector("#resultado");


if (plan === "basico") {
  plan = basico;
} else if (plan === "intermedio") {
  plan = intermedio;
} else if (plan === "premium") {
  plan = premium;
}

