let txt = document.querySelector('#text')

function changeColorHandler(){
    if(document.querySelector('#custom:checked')){
        txt.style.color = '#7cfc00'
        txt.style.filter = 'drop-shadow(0 0 5px #7cfc00)'
        txt.textContent = 'power is on'
    } else{
        txt.style.color = '#f0f8ff'
        txt.textContent = 'please turn on the power'
        txt.style.filter = 'drop-shadow(0 0 5px #f0f8ff)'

    }
}

document.querySelector('#custom').addEventListener('click',changeColorHandler)
txt.textContent = 'please turn on the power'
