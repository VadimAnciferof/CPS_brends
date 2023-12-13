// Свайпер 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,

    breakpoints: {
        768: {
          enabled: false,
        },
      },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
        dynamicBullets: true,
        dynamicMainBullets: 9,
    }});


let brends = document.querySelector(".brends"); // Псевдомассив брендов

let srcLogo = "./icons/ic-logo-comp/" // Путь для файлов логотипов компаний
let Logos = ["Apple.png", "Samsung.png", "Acer.png", "Bosch.png", "Viewsonic.png", "Sony.png", "Acer.png"] // Имена файлов логотипов компаний

// Добавляем плашки в контейнер
for (let j = 0; j < 2; j++) {

    for (let i = 0; i < Logos.length; i++) {
        brends.appendChild(makeElem(srcLogo + Logos[i]));
    }
}

// Кнопка "more"
let buttonMore = document.querySelector(".button");

    buttonMore.addEventListener('change', function (evt) {
        evt.preventDefault();

        buttonMore.classList.toggle("button--more");
        buttonMore.classList.toggle("button--less");
        brends.classList.toggle("brends--height")
    } );

// Функции
function makeElem (logoSrc) { // Функция, создающая плашки
    
    let brenElem = document.createElement("li");
    brenElem.classList.add("swiper-slide");
    brenElem.classList.add("brends__item");
    brenElem.classList.add("brends__item--style");
    brenElem.classList.add("brends__item--hidden");

    let brenLogo = document.createElement("img");
    brenLogo.classList.add("brends__logo");
    brenLogo.src = logoSrc;
    brenElem.appendChild(brenLogo);

    let brenArrow = document.querySelector(".brends__arrow").cloneNode(true);
    brenElem.appendChild(brenArrow);

    return brenElem;
}

