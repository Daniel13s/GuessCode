
/*-------------------------------------Sobre-Nos------------------------------------------------*/
const botaoSobreNos = document.getElementById("sobreNosNav")

botaoSobreNos.addEventListener('mouseenter', mouseSobreNos)

function mouseSobreNos() {
    const nav = document.querySelector('#navBotao1')
    const botaoSobreNos = document.getElementById("sobreNosNav")

    const linhaCima = document.createElement('div')
    const linhaBaixo = document.createElement('div')

    linhaCima.setAttribute('id', 'linhaCimaSobreNos')
    linhaBaixo.setAttribute('id', 'linhaBaixoSobreNos')
    linhaCima.setAttribute('class', 'linhas')
    linhaBaixo.setAttribute('class', 'linhas')

    linhaBaixo.style.animation = 'aparição'
    linhaBaixo.style.animationIterationCount ='1'
    linhaBaixo.style.animationDuration = '1s'

    linhaCima.style.animation = 'aparição'
    linhaCima.style.animationIterationCount ='1'
    linhaCima.style.animationDuration = '1s'

    nav.appendChild(linhaCima)
    nav.appendChild(linhaBaixo)

    botaoSobreNos.addEventListener('mouseout', outSobreNos)
    function outSobreNos() {
        const linhaCima = document.getElementById('linhaCimaSobreNos')
        const linhaBaixo = document.getElementById('linhaBaixoSobreNos')
        linhaCima.parentNode.removeChild(linhaCima)
        linhaBaixo.parentNode.removeChild(linhaBaixo)
    }
}


/*-------------------------------------Projetos------------------------------------------------*/

const botaoProjetos = document.getElementById("projetosNav")

botaoProjetos.addEventListener('mouseenter', mouseProjetos)

function mouseProjetos() {
    const nav = document.querySelector('#navBotao2')
    const botaoProjetos = document.getElementById("projetosNav")
    
    const linhaCima = document.createElement('div')
    const linhaBaixo = document.createElement('div')

    linhaCima.setAttribute('id', 'linhaCimaProjetos')
    linhaBaixo.setAttribute('id', 'linhaBaixoProjetos')
    linhaCima.setAttribute('class', 'linhas')
    linhaBaixo.setAttribute('class', 'linhas')

    linhaBaixo.style.animation = 'aparição'
    linhaBaixo.style.animationIterationCount ='1'
    linhaBaixo.style.animationDuration = '1s'

    linhaCima.style.animation = 'aparição'
    linhaCima.style.animationIterationCount ='1'
    linhaCima.style.animationDuration = '1s'

    nav.appendChild(linhaCima)
    nav.appendChild(linhaBaixo)

    botaoProjetos.addEventListener('mouseout', outprojetos)
    function outprojetos() {
        const linhaCima = document.getElementById('linhaCimaProjetos')
        const linhaBaixo = document.getElementById('linhaBaixoProjetos')
        linhaCima.parentNode.removeChild(linhaCima)
        linhaBaixo.parentNode.removeChild(linhaBaixo)
    }
}

/*-------------------------------------FeedBacks------------------------------------------------*/


const botaoFeedBacks = document.getElementById("feedBacksNav")

botaoFeedBacks.addEventListener('mouseenter', mouseFeedBacks)

function mouseFeedBacks() {
    const nav = document.querySelector('#navBotao3')
    const botaoFeedBacks = document.getElementById("feedBacksNav")
    
    const linhaCima = document.createElement('div')
    const linhaBaixo = document.createElement('div')

    linhaCima.setAttribute('id', 'linhaCimaFeedBacks')
    linhaBaixo.setAttribute('id', 'linhaBaixoFeedBacks')
    linhaCima.setAttribute('class', 'linhas')
    linhaBaixo.setAttribute('class', 'linhas')

    linhaBaixo.style.animation = 'aparição'
    linhaBaixo.style.animationIterationCount ='1'
    linhaBaixo.style.animationDuration = '1s'

    linhaCima.style.animation = 'aparição'
    linhaCima.style.animationIterationCount ='1'
    linhaCima.style.animationDuration = '1s'

    nav.appendChild(linhaCima)
    nav.appendChild(linhaBaixo)

    botaoFeedBacks.addEventListener('mouseout', outFeedBacks)
    function outFeedBacks() {
        const linhaCima = document.getElementById('linhaCimaFeedBacks')
        const linhaBaixo = document.getElementById('linhaBaixoFeedBacks')
        linhaCima.parentNode.removeChild(linhaCima)
        linhaBaixo.parentNode.removeChild(linhaBaixo)
    }
}


/*-------------------------------------Contato------------------------------------------------*/

const botaoContato = document.getElementById("contatoNav")

botaoContato.addEventListener('mouseenter', mouseContato)

function mouseContato() {
    const nav = document.querySelector('#navBotao4')
    const botaoContato = document.getElementById("contatoNav")
    
    const linhaCima = document.createElement('div')
    const linhaBaixo = document.createElement('div')

    linhaCima.setAttribute('id', 'linhaCimaContato')
    linhaBaixo.setAttribute('id', 'linhaBaixoContato')
    linhaCima.setAttribute('class', 'linhas')
    linhaBaixo.setAttribute('class', 'linhas')

    linhaBaixo.style.animation = 'aparição'
    linhaBaixo.style.animationIterationCount ='1'
    linhaBaixo.style.animationDuration = '1s'

    linhaCima.style.animation = 'aparição'
    linhaCima.style.animationIterationCount ='1'
    linhaCima.style.animationDuration = '1s'

    nav.appendChild(linhaCima)
    nav.appendChild(linhaBaixo)

    botaoContato.addEventListener('mouseout', outContato)
    function outContato() {
        const linhaCima = document.getElementById('linhaCimaContato')
        const linhaBaixo = document.getElementById('linhaBaixoContato')
        linhaCima.parentNode.removeChild(linhaCima)
        linhaBaixo.parentNode.removeChild(linhaBaixo)
    }
}

botaoSobreNos.addEventListener('click', direcionarSobreMim)
function direcionarSobreMim(){
    window.scrollTo(0, 1000)
    if(window.outerWidth < 1000){
        window.scrollTo(0, 500)
    }
}

botaoProjetos.addEventListener('click', direcionarProjetos)
function direcionarProjetos(){
    window.scrollTo(0, 1700)
    if(window.outerWidth < 1000){
        window.scrollTo(0, 1100)
    }
}

botaoFeedBacks.addEventListener('click', direcionarFeedBacks)
function direcionarFeedBacks(){
    window.scrollTo(0, 2200)
    if(window.outerWidth < 1000){
        window.scrollTo(0, 2000)
    }
}

botaoContato.addEventListener('click', direcionarContato)
function direcionarContato(){
    window.scrollTo(0, 3000)
    if(window.outerWidth < 1000){
        window.scrollTo(0, 2700)
    }
}

const enviarEmail = document.getElementById('enviarContato')

enviarEmail.addEventListener('mouseenter', enviar)
function enviar() {
    const mensagem = document.getElementById("mensagemParaContato").value
    enviarEmail.setAttribute('href', `mailto:codeGuess246@gmail.com?subject=Estou interessado em adquirir um Site!&body=${mensagem}`)
}
