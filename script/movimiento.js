const movPage = document.querySelector('.movPage');
const btn_adelante = document.querySelector('.sigPage');
const btn_atras = document.querySelector('.volver-pag');
const btn_final = document.querySelector('.btn-finalizar');

const progressText = document.querySelectorAll('.paso p');
const num = document.querySelectorAll('.paso .num');
const progressCheck = document.querySelectorAll('.paso .check');

let max = 2;
let cont = 1;


btn_adelante.addEventListener('click', function(e){
    e.preventDefault();
    movPage.style.marginLeft = '-25%';
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
})
btn_atras.addEventListener('click', function(e){
    e.preventDefault();
    movPage.style.marginLeft = '0%';
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
})
btn_final.addEventListener('click', function(e){
    e.preventDefault();
    Swal.fire(
        'Perfecto!',
        'Estamos Cotizando su Costo',
      )
})

/* Alert del botón final */
