// DOM Document Object Model 
//Transformar tudo do html em objeto

// Alterando um estilo do html
// document.body.style.background = "purple";

/*Abre e fecha o menu hamburguer  */

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show')
    })
  }


/*Quando clicar em um item do menu, esconder o menu */

const links =  document.querySelectorAll('nav ul li a ');
for(const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// Mudar o header da página quando der scroll

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;
  if(window.scrollY >= navHeight) {
    //scroll é maior que a altura do header 
    header.classList.add('scroll')
  
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }

}


/**Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  //Quantos sliders vai aparecer
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true
});

/**ScrollReveal : Mostrar elementos quando der scroll na página  */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
#home .text, #home .image,
#about .text, #about .image,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links
footer .brand, footer .social
`, { interval: 100})

/**Botão voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/**When Scroll */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
})