var view = document.querySelector('#mySlides')
var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})