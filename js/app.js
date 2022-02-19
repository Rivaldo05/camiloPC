const select = (el) => document.getElementById(el)
const btMobile = select('btn-mobile')
const navMenu = select('Nav-menu')
const itens = document.querySelectorAll('#slide-itens *')
const prox = select('prox')
const ant = select('ant')
const thumbSlide = select('thumb-slide')
const linkA = document.querySelectorAll('#lista-menu a')
let ativo = 0


function toogleMenu(event){
    let active = navMenu.classList.contains('active')
    navMenu.classList.toggle('active')
    
    if (event.type === 'touchstart') event.preventDefault() // previne o evento padrão do touch (demora um tempo para registrar o click)
  
    // Acessibilidade ... acrescenta infromações no botão para os leitores de tela
    event.currentTarget.setAttribute('aria-expanded', active)
  
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    } else {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } 
}

function proximo_slide(){
    if (ativo < itens.length-1) {
      ativo++
    }else{
      ativo = 0
    }
    clearInterval()
    ativaSlide()
}
  
function slide_anterior(){
    if (ativo > 0) {
      ativo--
    }else{
      ativo = itens.length - 1
    }
    ativaSlide()
}
  
function AtivathumbSlide(){
    itens.forEach(()=>{
      thumbSlide.innerHTML += '<span></span>'
    })
  
    thumbItens = Array.from(thumbSlide.children)
}
  
function ativaSlide(){
    itens.forEach(element => {
      element.classList.remove('slide-ativo')
    });
    thumbItens.forEach(element => {
      element.classList.remove('slide-ativo')
    });
  
    itens[ativo].classList.add('slide-ativo')
    thumbItens[ativo].classList.add('slide-ativo')
    autoSlide()
}
  
function autoSlide(){
    clearTimeout(this.time)
    this.time = setTimeout(()=>{
      proximo_slide()
    }, 3000)
}


window.onload = AtivathumbSlide()
window.onload = ativaSlide()
btMobile.addEventListener('click', toogleMenu)
btMobile.addEventListener('touchstart', toogleMenu)
prox.addEventListener('click', slide_anterior)
ant.addEventListener('click', proximo_slide)