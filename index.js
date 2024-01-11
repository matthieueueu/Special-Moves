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
    document.getElementById("car1").innerHTML += `<img src="https://i.makeagif.com/media/4-17-2014/_lM7eX.gif" alt="">`

    energy = energy-energyCosts[0]
    print(energy)
}



function onClickWater(){

}


function onClickBurn(){
    
}


function onClickShovel(){
    
}


function onClickBomb(){
    
}

document.getElementById("energy").innerHTML += `Energy level = ${energy}`