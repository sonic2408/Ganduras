const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // 1. Выдвигаем панель
    nav.classList.toggle('nav-active');

    // 2. Превращаем бургер в крестик
    burger.classList.toggle('toggle');
});