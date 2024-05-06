import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

/**
 * こんな風に検索しないと出ない件「swiper 端のスライド 半分表示」
 */
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    centeredSlides: true,
    initialSlide: 1,
})