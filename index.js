const print = console.log;

let energy = 100

alert("Click on different moves to complete different actions.")
alert("Different moves require different amounts of energy.")
alert("Don't waste all your energy otherwise it's GAMEOVER.")
alert("This website is brought to you by Raid Shadow Legends.")
alert("Click on ad for +20 energy (only works if you have 80 energy or less)")

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
    20,
    5,
    50,
]

print(energyCosts[0])

function checkEnergy(){
    if (energy < 1){
        document.getElementById("body").innerHTML = `<h2>GAME OVER</h2>`
        document.getElementById("image").innerHTML = ``
        document.getElementById("addEnergy").innerHTML = `THANK YOU FOR PLAYING`

        energy = 0;
        document.getElementById("energy").innerHTML = `Energy level = ${energy}`;
        document.getElementById("addEnergy").disabled = true;
    }
}

function onClickCar(){
    document.getElementById("image").innerHTML = `<img src="https://i.makeagif.com/media/4-17-2014/_lM7eX.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[0]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
    print(energy)
    checkEnergy()
}



function onClickWater(){
    document.getElementById("image").innerHTML = `<img src="https://media.tenor.com/9mN_RX9_FPsAAAAM/kamen-rider-nigo-waterboarding.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[1]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
    checkEnergy()

}


function onClickBurn(){
    document.getElementById("image").innerHTML = `<img src="https://media1.tenor.com/m/qQv_BSE2MOoAAAAC/burning-man-burning-bike.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[2]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
    checkEnergy()

}


function onClickShovel(){
    document.getElementById("image").innerHTML = `<img src="https://media.tenor.com/zqDK-5_B1c8AAAAC/fight-shovel.giff" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[3]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
    checkEnergy()


}


function onClickBomb(){
    document.getElementById("image").innerHTML = `<img src="https://33.media.tumblr.com/cf7f1b12d52bb5d9b3cafe88282560b0/tumblr_ndrvh35bP11ttwc1to1_400.gif" alt="">`
    // change energy on HTML page
    // 1. select the #energy div
    // 2. change the innerHTML
    
    energy = energy-energyCosts[4]
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`
    checkEnergy()
}

function onClickGetMoreEnergy(){
    if (energy <100){
        energy += 1;
        document.getElementById("energy").innerHTML = `Energy level = ${energy}`;
    } else if (energy>100){
        document.getElementById("addEnergy").disabled = true;
    }
}

function onClickAd(){
    energy += 20;
    document.getElementById("energy").innerHTML = `Energy level = ${energy}`;
}

document.getElementById("energy").innerHTML += `Energy level = ${energy}`





