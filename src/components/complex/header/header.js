import {
  disablePageScroll, enablePageScroll, getScrollState,
} from 'scroll-lock';

const header = document.querySelector('.header');
const burger = document.querySelector('#burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (header) {
  window.addEventListener('scroll', () => {
    // если нет класса, добавляем
    if (!header.classList.contains('header--scrolling')) {
      header.classList.add('header--scrolling');
    }
    // если докрутили в начало страницы, убираем класс
    if (window.pageYOffset === 0) {
      header.classList.remove('header--scrolling');
    }
  });
}

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
    mobileMenu.classList.toggle('mobile-menu--active');

    // Возвращает состояние полосы прокрутки страницы
    if (getScrollState()) {
      // если станица прокручивается, то исправляем это и наоборот
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  });
}
