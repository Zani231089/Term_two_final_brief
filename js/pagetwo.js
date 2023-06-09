let subwayOrder = [];

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

    let toppingsOptions = document.getElementById("toppings");
    let topArray = [];
    for(let i = 0; i < toppingsOptions.length; i++){
        if(toppingsOptions[i].checked){
            topArray.push(toppingsOptions[i].value);
            subwayTotal = subwayTotal + +toppingsOptions[i].dataset.cost
        }
    }

    pizzaOrder.push({
        subwayName: subwayName,
        subwayBread: bread,
        subwayToppings: topArray,
        subwayPrice: subwayTotal
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

    let toppingsOption = document.getElementById("toppings");
    for(let i = 0; i < toppingsOptions.length; i++){
        if(toppingsOptions[i].checked){
            realTimePrice = realTimePrice + +toppingsOptions[i].dataset.cost
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ", 00"
}