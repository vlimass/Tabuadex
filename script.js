var clickCount = 1
function calc(){
    var txtn1 = window.document.getElementById('n1')
    var txtn2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var error = window.document.getElementById('error')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    if (txtn1.value.length == 0 || txtn2.value.length == 0 || n2 <= 0){  //Erro no preenchimento do formulário
    
        error.style.color = 'red'
        error.style.fontFamily = 'Arial'
        error.style.textAlign = 'center'
        error.innerHTML  = 'Formulário inválido. Por favor, tente novamente. <br>'

    } else {

        error.innerHTML = ''
        var tab = document.createElement('select')
        tab.id = 'seltab'
        res.appendChild(tab)
        
        if (n2 <= 10){
            tab.size = n2
        } else {
            tab.size = '10'
        }

        if (tab.size == '1'){
            tab.style.fontWeight = 'normal'
        }

        for (var c = 1; c <= n2; c++){
            let item = document.createElement('option')
            item.innerHTML = `${n1} x ${c} = ${n1 * c} <br>`
            item.value = `value${c}`
            tab.appendChild(item)
        }
        res.innerHTML += '<br>'
        res.style.marginBottom = '1em'

        var clearSection = document.getElementById('clearSection')
        var clearButton = document.createElement('input')
        clearButton.setAttribute('type','button')
        clearButton.value = 'LIMPAR'
        clearButton.id = 'clearButton'
        clearButton.onmouseover = function mouseover(){
            clearButton.style.backgroundColor = 'rgba(126, 107, 190, 0.76)'
        }    

        clearButton.onmouseout = function mouseOut(){
            clearButton.style.backgroundColor = 'rgba(166, 140, 252, 0.87)'
        }

        if (clickCount == 1){
            clearSection.appendChild(clearButton)
        }
        clearButton.onclick = function clear(){
            window.location.reload()
        }
        clickCount += 1
    }
}

function mouseOver(){
    let button = window.document.getElementById('clickButton')
    button.style.backgroundColor = 'rgba(126, 107, 190, 0.76)'

}

function mouseOut(){
    let button = window.document.getElementById('clickButton')
    button.style.backgroundColor = 'rgba(166, 140, 252, 0.87)'
}
