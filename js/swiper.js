import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

/**
 * こんな風に検索しないと出ない件「swiper 端のスライド 半分表示」
 */
const initSwiper = (slides_per_view) => {
    new Swiper('.swiper', {
        loop: true,
        slidesPerView: slides_per_view,
        spaceBetween: 50,
        centeredSlides: true,
        initialSlide: 1,
    })
}

const createSwiper = () => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    if (mediaQuery.matches) {
        initSwiper(1.5)
    } else {
        initSwiper(4)
    }
}

const resizeListner = () => {
    createSwiper()
}

const initialize = () => {
    createSwiper()
}

/**
 * 初回ロード時に実行
 */
const domContentLoaded = () => {
    initialize()
    window.addEventListener('resize', resizeListner)
}

document.addEventListener('DOMContentLoaded', domContentLoaded)