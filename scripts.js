let contadorAmas = 0
let contadorMacro = 0   
let res1 = window.document.querySelector('div#resMacro') 
let res2 = window.document.querySelector('div#resAmas')  

function clicar1(){
    
    contadorMacro ++ 
    let but1 = window.document.querySelector('input#butMacro')
    res1.innerHTML = `<p>O contador de Células está com <mark>${contadorMacro}</mark>cliques</p>`
}

function clicar2(){
    
    contadorAmas ++
    let but2 = window.document.querySelector('input#butAmas')    
    res2.innerHTML = `<p>O contador de Parasitas está com <mark>${contadorAmas}</mark>cliques</p>`
}

function clicar3(){
    contadorAmas = 0
    contadorMacro = 0
    let but3 = window.document.querySelector('input#butZer')
    res1.innerHTML = null
    res2.innerHTML = null 
}
