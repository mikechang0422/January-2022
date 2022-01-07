// 以下為等等會用到的代碼解釋

// const matrix = document.querySelector('#maxtrix')
// 抓取位置

// const ctx = matrix.getContent('2d')
// 設定成2D

// ctx.fillStyle = '#0f0'
// 填充色 可以是單一色color或漸變色gradient()或模式pattern

// ctx.fillRect = (0,0,150,75)
// 前0,0是定位(X,Y)後150,75是(寬,高)px

// context.font = 'oblique normal bold/1.5 16px arial'
// 第一個為font-style : normal italic oblique
// 第二個為font-variant : normal small-caps
// 第三個為font-weight : 同CSS的font-weight
// 第四個為font-size/line-height : 同CSS
// 第五個為font-fanmily : 同CSS

// context.fillText(text,x,y,maxWidth)
// text = 文本內容
// X,Y = 座標
// maxWidth = 最大寬度

// Math.floor(x)
// 返回小於等於X的最大整數 如果X為整數則不變

// Math.random()
// 提供一個X X>0 && X<1

// Math.ceil(x)
// 無條件進位法

// setInterval(() => { code:...}, interval,param1,param2,...);
// setInterval定期執行
// code執行的程式
// interval間隔的時間
// param回傳值

// window.innerHeight
// 當前視窗高 px

// window.innerWidth
// 當前視窗寬 px


let H = window.innerHeight
let W = window.innerWidth
let mycanvas = document.getElementById('mycanvas')
let ctx = mycanvas.getContext('2d')

mycanvas.height = H
mycanvas.width = W

let fontsize = 20
let text = []
let lie = Math.floor(W / fontsize)
let str = '01'
for (let i = 0; i < lie; i++) {
    text.push(0)
}
ctx.font = `400 ${fontsize}px Lato`

function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.08)'
    ctx.fillRect(0, 0, W, H)
    ctx.fillStyle = randColor()
    for (let i = 0; i < lie; i++) {
        let index = Math.floor(Math.random() * str.length)
        let x = Math.floor(fontsize * i) 
        let y = text[i] * fontsize //讓Y軸也向下跳一個單位
        ctx.fillText(str[index], x, y)
        if (y > H && Math.random() > 0.99) {
            text[i] = 0
        }
        text[i]++
    }
}

function randColor() {
    // let r = Math.ceil(Math.random() * 155) + 100
    let g = Math.ceil(Math.random() * 155) + 100
    // let b = Math.ceil(Math.random() * 155) + 100
    return `rgb(0,${g},0)`
}
let timer = setInterval(function() {
    draw()
}, 1000 / 20)


window.onload = function(){
    timer
}

function bgSizeChange(){
    clearInterval(timer)
    H = window.innerHeight
    W = window.innerWidth
    mycanvas.height = H
    mycanvas.width = W
    lie = Math.floor(W / fontsize)
    fontsize = 20
    ctx.font = `400 ${fontsize}px Lato`

    timer= setInterval(function() {
        draw()
    }, 1000 / 20)
}

window.onresize = bgSizeChange