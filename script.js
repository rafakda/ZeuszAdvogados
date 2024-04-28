
var ul = document.querySelector('div.headerConteinerMeioMobile')//ACESSANDO O CSS COM O JS
ul.style.height = '0%'




function menu(){
    var btn = document.querySelector('div.hamburuer')
    btn.classList.toggle('ativa')//CRIANDO UMA CLASSE PARA O MENU HHAMBURGUER NO CSS

    if(ul.style. height == '0%'){//CONDICIONAIS DO MENU HAMBURGUER
        ul.style. height = '100%'
    }else{
        ul.style. height = '0%'
    }
    
}



