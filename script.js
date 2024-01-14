var currentMoleTile;
var currentPlantTile;
let score=0;
let gameover = false;

window.onload = function(){
    setGame();
}

function setGame(){
    for(let i=0; i<9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole , 1000);
    setInterval(setPlant , 2000);
}
function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if(gameover) return;
    if(currentMoleTile != null){
        currentMoleTile.innerHTML = "";
        currentMoleTile = null;
    }
    let mole = document.createElement("img");
    mole.src = "mole.png";
    let num = getRandomTile();
    if(currentPlantTile && currentPlantTile.id == num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);

}

function setPlant(){
    if(gameover) return;
    if(currentPlantTile != null){
        currentPlantTile.innerHTML = "";
        currentPlantTile = null;
    }

    let plant = document.createElement("img");
    plant.src = "plant.png";

    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id == num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameover) return;
    const gameOverElement = document.getElementById("score");
    if(this == currentMoleTile){
        score+=10;
        document.getElementById("score").innerHTML = score.toString();
    }

    else if (this == currentPlantTile){
        document.getElementById("score").innerText = "𝔾𝕒𝕞𝕖 𝕆𝕧𝕖𝕣: " + score.toString();
        gameOverElement.style.color = "red";
        score=0;
        gameover = true;
    }

}

