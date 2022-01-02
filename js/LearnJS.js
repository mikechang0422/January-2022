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