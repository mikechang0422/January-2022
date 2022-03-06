const progress = 0
let app = document.querySelector('#app')
let section1 = document.querySelector('#section1')
let section2 = document.querySelector('#section2')
let section3 = document.querySelector('#section3')

// 半成品原本是vue改用純js
function scrollHandler(e) {
    if((app.getBoundingClientRect().top * -1 ) < section1.getBoundingClientRect().height){
        progress.value = 3
    }
    else if (app.scrollTop > window.innerHeight){
        Progress.value = 1
    }
    else{
        return
    }
    console.log(section3.getBoundingClientRect().bottom)
}

document.addEventListener('scroll',scrollHandler)
