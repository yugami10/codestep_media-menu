/**
 * ハンバーガーメニューをクリック時のモーダル切替
 */
const switchHambargerMenu = () => {
    const header = document.querySelector('header')
    if (header.classList.contains('hambarger-open')) {
        header.classList.remove('hambarger-open')
    } else {
        header.classList.add('hambarger-open')
    }
}

/**
 * ハンバーガーアイコンを押下
 */
const clickHambarger = () => {
    switchHambargerMenu()
}

/**
 * モーダルのレイヤーを押下
 */
const clickLayer = () => {
    switchHambargerMenu()
}

const scrollEvents = () => {
    const elements = document.querySelectorAll('.feature__item_picture_wrapper')

    for (const element of elements) {
        const pos = element.getBoundingClientRect()
        if (pos.top < window.innerHeight) {
            element.classList.add('open')
        }
    }
}

/**
 * 初回ロード時に実行
 */
const domContentLoaded = () => {
    const hambarger = document.querySelector('.header__hambarger')
    hambarger.addEventListener('click', clickHambarger)

    const layer = document.querySelector('.layer')
    layer.addEventListener('click', clickLayer)

    document.addEventListener('scroll', scrollEvents)
}

document.addEventListener('DOMContentLoaded', domContentLoaded)