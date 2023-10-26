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
  /* Pone en pantalla el precio de la cotizacion */
  setTimeout(() =>{
    let divResultado = document.querySelector("#resultado");
    let cotizacionFinal = cotizar();
    divResultado.style.display = "block";
    divResultado.className = "divResultado";
    divResultado.innerHTML = `
    <h1 class="h1-resultado">Realizamos su cotización, Mantenga su mascota asegurada!</h1>
    <h3 class="h3-resultado">Cotización Final:<br> $${cotizacionFinal}</h3>`;
},1000)
/* Pone en pantalla el precio de la cotización pasado a dólar Blue */
  setTimeout(() =>{
    let divDolar = document.querySelector("#dolar");
    let dolarBlue = calcularDolar();
    divDolar.style.display = "block";
    divDolar.className = "divDolar";
    divDolar.innerHTML = `
    <h3 class="h3-resultado">Precio en Dólar Blue:<br> $${dolarBlue}</h3>`
  },1000)

});

/* Cotización */
const cotizar = () => {
const mascota = document.getElementById("mascota").value;
const edad = document.getElementById("edad").value;
const raza = document.getElementById("raza").value;
const plan = document.getElementById("plan").value;

let cotizacionBase = 2000

/* lOGICA DE COTIZACION */
if (mascota === "perro"){
  cotizacionBase += 1000;
} else if (mascota === "gato"){
  cotizacionBase += 500;
}
  switch(edad){
    case 'año1': cotizacionBase+=500;break;
    case 'año2': cotizacionBase+=700;break;
    case 'año3': cotizacionBase+=1000;break;
    case 'año4': cotizacionBase+=1500;break;
  }
  switch (raza){
    case 'sinRaza': cotizacionBase+=0;break;
    case 'caniche': cotizacionBase+=500;break;
    case 'pitbull': cotizacionBase+=1000;break;
    case 'bulldog': cotizacionBase+=1000;break;
    case 'salchicha': cotizacionBase+=500;break;
    case 'schnauzer': cotizacionBase+=500;break;
    case 'dogoArgentino': cotizacionBase+=1500;break;
    case 'goldenRetriever': cotizacionBase+=1500;break;
    case 'beagle': cotizacionBase+=700;break;
    case 'ovejero': cotizacionBase+=1500;break;
}
  if(plan === 'basico'){
    cotizacionBase += 1500
  } else if (plan === 'intermedio'){
    cotizacionBase += 2000
  } else if (plan === 'premium'){
    cotizacionBase += 3000
  }
  return cotizacionBase;
};

    /* Consumo de API Dolar Blue */
    async function obtenerDolarBlue() {
      try {
          const response = await fetch('https://dolarapi.com/v1/dolares/blue');
          const data = await response.json();
          return data.venta;
      } catch (error) {
          console.error('Error al obtener el valor del dólar blue:', error);
          return null;
        }     
      }
      /* Logica de cotizacion en Dolares */
      const calcularDolar =(cotizacionBase) =>{
        cotizacionDolar = cotizacionBase / data
        return cotizacionDolar
      }

    
   
  

    
    
    