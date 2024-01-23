const print = console.log;

let energy = 100

let specialMove = [
    "run over by a car",
    "waterboarding",
    "burning",
    "rusted shovel",
    "H-Bomb",
]

let energyCosts = [
    10,
    10,
    5,
    5,
    50,
]

print(energyCosts[0])



function onClickCar(){
    document.getElementById("car1").innerHTML = `<img src="https://i.makeagif.com/media/4-17-2014/_lM7eX.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[0]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
    print(energy)
}



function onClickWater(){
    document.getElementById("water1").innerHTML = `<img src="https://media.tenor.com/9mN_RX9_FPsAAAAM/kamen-rider-nigo-waterboarding.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[1]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
}


function onClickBurn(){
    document.getElementById("burn1").innerHTML = `<img src="https://media1.tenor.com/m/qQv_BSE2MOoAAAAC/burning-man-burning-bike.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[2]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
}


function onClickShovel(){
    document.getElementById("shovel1").innerHTML = `<img src="https://media.tenor.com/zqDK-5_B1c8AAAAC/fight-shovel.giff" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[3]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
}


function onClickBomb(){
    document.getElementById("bomb1").innerHTML = `<img src="https://33.media.tumblr.com/cf7f1b12d52bb5d9b3cafe88282560b0/tumblr_ndrvh35bP11ttwc1to1_400.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[4]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
}

document.getElementById("energy").innerHTML += `Energy level = ${energy}`