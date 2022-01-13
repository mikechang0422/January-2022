const captcha = document.querySelector('#captcha')
const handle = document.querySelector('#handle')
const button = document.querySelector('#handle span')
let shouldMove = false

captcha.style.setProperty('--moved','0px')


button.addEventListener('mousedown',(e) =>{
    shouldMove = true
})

window.addEventListener('mousemove',(e) =>{
    if(shouldMove){
        const offsetLeft = handle.getBoundingClientRect().left
        const buttonWidth = button.getBoundingClientRect().width

        captcha.style.setProperty('--moved',`${e.clientX - offsetLeft - buttonWidth / 2}px`)
    }
})

window.addEventListener('mouseup',(e) =>{
    if(shouldMove){
        const finalOffset = e.clientX - handle.getBoundingClientRect().left
        if(430<=finalOffset && finalOffset<= 450){
            captcha.classList.add('passed')
            document.querySelector('p').classList.add('show')
        }else{
            captcha.style.setProperty('--moved','0px')
            captcha.classList.remove('passed')
        }
        shouldMove = false
    }
})
