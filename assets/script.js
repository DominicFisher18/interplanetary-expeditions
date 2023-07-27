document.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header')
            .classList.add('onscroll')
    } else {
        document.querySelector('.header')
            .classList.remove('onscroll')
    }
}

const homeButton = document.querySelector('.home-button')
homeButton.addEventListener('click', () => {
    location.href = "#about"
})