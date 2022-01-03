//section1 add "0"
function addZero(num,digit){
    let numString = String(num)
    while(numString.length<digit){
        numString = '0' + numString
    }
    return numString
}
document.querySelector('#addZero').textContent = 'addZero( 10 , 3 ) = ' + addZero(10,3)

let songs = [
    'Stella By Starlight',
    'Ssation Doll',
    'Caravan',
    'Besame Mucho',
    'My Favorite Things',
    'Taking A Chance On Love',
    'Tly me To The Moon',
    'Waltz For Debby',
    'Willow Weep For ME',
    'Bluesette'
]

for(let i=0;i<songs.length;i++){
    let addLi = document.createElement('li')
    addLi.textContent = addZero(i + 1,2) + '. ' + songs[i]
    document.querySelector('ul#addZeroList').appendChild(addLi)
}

//section2 Math Floot
document.querySelector('#mathPi').textContent = Math.PI
document.querySelector('#mathPiFloor').textContent = Math.floor(Math.PI)
function mathPiFloor(num,flo){
    // document.querySelector('#mathPiFloor2').textContent = `保留小數點下${flo}位= ${Math.floor(num * 10**flo) / 10**flo}`
    
    // ** = Math.pow
    document.querySelector('#mathPiFloor2').textContent = `保留小數點下${flo}位= ${Math.floor(Math.PI * Math.pow(10,flo)) / Math.pow(10,flo)}`

}
mathPiFloor(Math.PI,3)

document.querySelector('#mathPiParseInt').textContent = parseInt(Math.PI)
let piFix = Math.PI
piFix = piFix.toFixed(2)
document.querySelector('#mathPiParseFloat').textContent = parseFloat(piFix)

//set time out

let countDown = function(due) {
    let now = new Date()
    let res = due.getTime() - now.getTime()
    let sec = Math.floor(res /1000 %60)
    let min = Math.floor(res /1000 /60) %60
    let hour = Math.floor(res /1000 /60 /60) %24
    let day = Math.floor(res /1000 /60 /60 /24)
    let count = [day,hour,min,sec]
    return count
}

let goal = new Date()
goal.setHours(24)
goal.setMinutes(0)
goal.setSeconds(0)

let counter = function(){

    document.querySelector('#setTime').textContent = `${countDown(goal)[1]}小時${countDown(goal)[2]}分${countDown(goal)[3]}秒`
}

setInterval(()=>{
    counter()
},500)

let getNewYear = function(){
    let newYear = new Date(2024,1,1)
    let now = new Date()

    let timeold = newYear.getTime() - now.getTime()
    let sec = Math.floor(timeold /1000 %60)
    let min = Math.floor(timeold /1000 /60) %60
    let hour = Math.floor(timeold /1000 /60 /60) %24
    // let lostDay = [31,28,31,30,31,30,31,31,30,31,30,31] //配合lostDay[mon]反向讀取日期總數
    let lostDay = [31,30,31,30,31,31,30,31,30,31,28,31]
    let nowDay = now.getDate()
    let mon = 12 - newYear.getMonth()
    day = lostDay[mon] - nowDay
    let countNewYear = [mon,day,hour,min,sec]
    return countNewYear
}

function setNewYear(){
    getNewYear()
    document.querySelector('#setTime2').textContent = `${getNewYear(0)[0]}月${getNewYear(0)[1]}日${getNewYear(0)[2]}小時${getNewYear(0)[3]}分${getNewYear(0)[4]}秒`
}
setInterval(()=>{
    setNewYear()
},1000)

// Select 跳轉
let form1 = document.querySelector('#form1')
form1.select.onchange // 當select變化時 這裡的select是name屬性
= function(){ //啟動以下的匿名函式
        location.href = form1.select.value
    }

// radio 用法
let form2 = document.querySelector('#form2')
let form2Ans = document.querySelector('#form2Ans')
form2.onsubmit = function (){
    if(Cookies.get('answered') === 'yes'){
        form2Ans.textContent = '已回復'
        return false
    }
    else{
        Cookies.set('answered','yes',{expires:7})
        form2Ans.textContent = '感謝回復'
    }
}
document.querySelector('#form2remove').onclick = function(){
    Cookies.remove('answered')
    form2Ans.textContent = '請重新作答'
}