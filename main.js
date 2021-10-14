//Revel

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
.logo h1, .header-itens nav, .header-itens h1, .call , .about h1, .about-content img, .about-txt,
.skills,  .frase, .social, .social p

`, {
        interval: 150
    }
)

//back to top
window.addEventListener('scroll', function() {
    const btnHome = document.querySelector('.btn-home')
    btnHome.classList.toggle('sticky', window.scrollY > 0)

    if (window.scrollY > 0) {
        const arrowOn = document.querySelector('#arrowUp')
        arrowOn.style.display = 'initial'
    } else {
        const arrowOff = document.querySelector('#arrowUp')
        arrowOff.style.display = 'none'
    }
})