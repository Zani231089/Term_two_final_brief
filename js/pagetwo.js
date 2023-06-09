let subwayOrder []

makeSubway = () => {

    let subwayTotal = 0;

    let subwayName = document.getElementById("subwayName").ariaValueMax;
    let bread = document.getElementById("bread").value;

    if(bread === "Artisan Italian"){
        subwayTotal = subwayTotal + 20;
    } else if(bread === "Wheat bread"){
        subwayTotal = subwayTotal + 40;
    } else if(bread === "Sourdough"){
        subwayTotal = subwayTotal + 60;
    } else if(bread === "Malted Rye"){
        subwayTotal = subwayTotal + 50
    }

    let 
}