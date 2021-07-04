


setInterval(UpdateScoreDisplay,1);

let IsPowerUp1Buyed = false;
let IsPowerUp2Buyed = false;
let IsPowerUp3Buyed = false;
let IsPowerUp4Buyed = false;


let score = 0;

function Clicked(){
    score ++;
    //document.getElementById("scoreDisplay").innerHTML = score; 
}

//#region powerups
function BuyPowerUp1(){
    if(IsPowerUp1Buyed == false && score >= 10){
        IsPowerUp1Buyed = true;
        score -= 10;
        document.getElementById("PowerUp1").className = "BoughtPowerUp";
        setInterval(PowerUp1Tick,1000);               
    }
}
function BuyPowerUp2(){
    if(IsPowerUp2Buyed == false && score >= 50){
        IsPowerUp2Buyed = true;
        score -= 50;
        document.getElementById("PowerUp2").className = "BoughtPowerUp";
        setInterval(PowerUp2Tick,700);               
    }
}
function BuyPowerUp3(){
    if(IsPowerUp3Buyed == false && score >= 100){
        IsPowerUp3Buyed = true;
        score -= 100;
        document.getElementById("PowerUp3").className = "BoughtPowerUp";
        setInterval(PowerUp3Tick,800);               
    }
}
function BuyPowerUp4(){
    if(IsPowerUp4Buyed == false && score >= 300){
        IsPowerUp4Buyed = true;
        score -= 300;
        document.getElementById("PowerUp4").className = "BoughtPowerUp";
        setInterval(PowerUp4Tick,500);               
    }
}
//#endregion

//#region powerups ticks
function PowerUp1Tick(){
    score ++;
}
function PowerUp2Tick(){
    score += 3;
}
function PowerUp3Tick(){
    score += 5;
}
function PowerUp3Tick(){
    score += 5;
}
//#endregion

function UpdateScoreDisplay(){ 
    document.getElementById("scoreDisplay").innerHTML = score;

    if(IsPowerUp1Buyed == false){
        if(score >= 10){
            document.getElementById("PowerUp1").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp2Buyed == false){
        if(score >= 50){
            document.getElementById("PowerUp2").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp3Buyed == false){
        if(score >= 100){
            document.getElementById("PowerUp3").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp4Buyed == false){
        if(score >= 300){
            document.getElementById("PowerUp4").className = "AvailablePowerUp";
        }
    }
}