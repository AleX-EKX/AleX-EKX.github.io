function toggleAccordion(element) {
    element.classList.toggle('active'); // Переключаем класс активности
    const plusIcon = element.querySelector('.plus-icon');
    const crossIcon = element.querySelector('.cross-icon');
    plusIcon.classList.toggle('active'); // Переключаем класс активности для плюс-иконки
    crossIcon.classList.toggle('active'); // Переключаем класс активности для крестик-иконки
}
function toggleMenu() {
    const menu = document.querySelector('.menus');
    const burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}
        
var prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', function() {
        var currentScrollPos = window.pageYOffset;
        var header = document.querySelector('.header');
        if (prevScrollpos > currentScrollPos) {
            header.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
        }
        prevScrollpos = currentScrollPos;
    });

    // buttons
        // zagruzka
        document.addEventListener('DOMContentLoaded', function () {
            var btn = document.querySelector('.btn_footer'),
                loader = document.querySelector('.loader'),
                check = document.querySelector('.check');
            
            btn.addEventListener('click', function () {
              loader.classList.add('active');    
            });
           
            loader.addEventListener('animationend', function() {
              check.classList.add('active'); 
            });
          });

    