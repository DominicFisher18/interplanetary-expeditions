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

const signUpButton = document.querySelector('.sign-up-button')
signUpButton.addEventListener('click', () => {
    location.href = "#pricing"
})

const signUpButton2 = document.querySelector('.sign-up-button2')
signUpButton2.addEventListener('click', () => {
    location.href = "#pricing"
})

const signUpButton3 = document.querySelector('.sign-up-button3')
signUpButton3.addEventListener('click', () => {
    location.href = "#pricing"
})

const signUpButton4 = document.querySelector('.sign-up-button4')
signUpButton4.addEventListener('click', () => {
    location.href = "#pricing"
})




const purchaseButton = document.querySelector('.purchase-button')
purchaseButton.addEventListener('click', () => {
    location.href = "#contact"
})
const purchaseButton2 = document.querySelector('.purchase-button-2')
purchaseButton2.addEventListener('click', () => {
    location.href = "#contact"
})
const purchaseButton3 = document.querySelector('.purchase-button-3')
purchaseButton3.addEventListener('click', () => {
    location.href = "#contact"
})

document.querySelector('.submit-button')
    .addEventListener('click', clearText)

function clearText() {
    document.querySelector('.name-text')
        .value = ''
    document.querySelector('.email-text')
        .value = ''
    document.querySelector('.message-text')
        .value = ''
}