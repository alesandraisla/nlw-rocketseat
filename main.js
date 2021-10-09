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
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if(window.scrollY >= navHeight) {
    //scroll é maior que a altura do header 
    header.classList.add('scroll')

  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})
