const botao = document.querySelector(".botao");
const elementos = document.querySelector(".checado");

function adiconarLabel(e){
    e.preventDefault()
    const a = this.nextElementSibling;
    a.classList.add('ativo')

    cliqueFora(this, ()=>{
        a.classList.remove('ativo')
    })
}

function cliqueFora(elemento ,parametro){
    const html = document.documentElement
    html.addEventListener('click', pegandoFora)
    function pegandoFora(evento){
        html.style.cursor = 'pointer'
        if(!elemento.contains(evento.target)){
            html.style.cursor = 'default'
            parametro()//callback
        }
    }
}

botao.addEventListener('click', adiconarLabel)