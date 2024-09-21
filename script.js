// new Swiper('.image-slider', {
//     slidesPerView: 2,
// 	spaceBetween: 0,
// 	// slidesPerColumn: 3,
//     // centeredSlides: true,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         type: 'bullets',
//     },
// });


let swiper;

    function toggleView() {
        if (window.innerWidth < 768) {
            // Инициализируем Swiper, если он не инициализирован
            if (!swiper) {
                swiper = new Swiper('.image-slider', {
                    slidesPerView: 1.2,
	                spaceBetween: 20,
                    centeredSlides: false,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1.2,
                          spaceBetween: 20
                        },
                        400: {
                            slidesPerView: 1.4,
                          spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 1.8,
                          spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 2.2,
                          spaceBetween: 40
                        }
                      }
                });
            }
        } else {
            // Разрушаем Swiper, если он существует
            if (swiper) {
                swiper.destroy(true, true);
                swiper = undefined;
            }
        }
    }


    // Проверяем размер экрана при загрузке
    toggleView();

    // Проверяем размер экрана при изменении
    window.addEventListener('resize', toggleView);

    document.getElementById('toggleButton').addEventListener('click', function () {
        // Находим все элементы с классом 'content'
        const contentDivs = document.querySelectorAll('.content');
        const toggleIcon = document.getElementById('toggleIcon');
        // Проверяем, скрыты ли дивы или нет, основываясь на первом диве
        const areHidden = contentDivs[0].style.display === 'none' || !contentDivs[0].classList.contains('show');
        
        if (areHidden) {
            // Если скрыты, показываем все
            contentDivs.forEach(div => {
                div.classList.add('show');
            });
            this.textContent = 'Скрыть';
            toggleIcon.src = ('resources copy/hide.svg');

        } else {
            // Если показаны, скрываем все
            contentDivs.forEach(div => {
                div.classList.remove('show');
            });
            this.textContent = 'Показать все';
            toggleIcon.src = ('resources copy/expand.svg')
        }
    });
  