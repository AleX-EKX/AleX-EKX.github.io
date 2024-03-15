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

    document.addEventListener('DOMContentLoaded', function() {
        const images = [
            "/image/ramka.png", // Пути к вашим изображениям
            "/image/image2.jpg",
            "/image/image3.jpg",
            "/image/image4.jpg"
        ];
        let currentIndex = 0;
        const imageElement = document.getElementById('currentImage');
        const nextButton = document.querySelector('.next');
        const backButton = document.querySelector('.back');
    
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });
    
        backButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });
    
        function updateImage() {
            imageElement.src = images[currentIndex];
        }
    });


    document.addEventListener('DOMContentLoaded', function() {
        const videos = [
            "https://www.youtube.com/embed/K5Eo0YYVi-U?si=p10x489Vp_lGFI2y", // Пути к вашим видео
            "/image/image2.jpg",
            "/image/image3.jpg",
        ];
        let currentIndex = 0;
        const videoElement = document.getElementById('currentVideo');
        const nextButton = document.querySelector('.next_video');
        const backButton = document.querySelector('.back_video');

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % videos.length;
            updateVideo();
        });

        backButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + videos.length) % videos.length;
            updateVideo();
        });

        function updateVideo() {
            videoElement.src = videos[currentIndex];
        }
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



    