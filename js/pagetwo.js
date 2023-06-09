let subwayOrder = [];

makeSubway = () => {

    let subwayTotal = 0;

    let subwayName = document.getElementById("subwayName").value;
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

    let meatOption = document.getElementById("meatOption");
    let topArray = [];
    for(let i = 0; i < meatOption.length; i++){
        if(meatOption[i].checked){
            topArray.push(meatOption[i].value);
            subwayTotal = subwayTotal + +meatOption[i].dataset.cost
        }
    }

    let vegetableOption = document.getElementById("vegetableOption");
    let vegArray = [];
    for(let i = 0; i < vegetableOption.length; i++){
        if(vegetableOption[i].checked){
            vegArray.push(vegetableOption[i].value);
            subwayTotal = subwayTotal + +vegetableOption[i].dataset.cost
        }
    }

    let cheeseOption = document.getElementById("cheeseOption");
    let cheArray = [];
    for(let i = 0; i < cheeseOption.length; i++){
        if(cheeseOption[i].checked){
            cheArray.push(cheeseOption[i].value);
            subwayTotal = subwayTotal + +cheeseOption[i].dataset.cost
        }
    }

    let veganOption = document.getElementById("veganOption");
    let veganArray = [];
    for(let i = 0; i < veganOption.length; i++){
        if(veganOption[i].checked){
            topArray.push(veganOption[i].value);
            subwayTotal = subwayTotal + +veganOption[i].dataset.cost
        }
    }

    pizzaOrder.push({
        subwayName: subwayName,
        meatOption: topArray,
        vegetableOption: vegArray,
        cheeseOption: cheArray,
        veganOption: veganArray
    });

    console.log(subwayOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subwayForm").reset();


}

realTimeCost = () => {
    realTimePrice = 0;

    let bread = document.getElementById("bread").value;
    if(bread === "Artisan Italian"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "Wheat bread"){
        realTimePrice = realTimePrice + 40;
    } else if(bread === "Sourdough"){
        realTimePrice = realTimePrice + 60;
    } else if(bread === "Malted Rye"){
        realTimePrice = realTimePrice + 50;
    }


    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ", 00"
}