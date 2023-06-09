let subwayOrder = [];

makeSubway = () => {

    let subwayTotal = 0;

    let subwayName = document.getElementById("subwayName").value;
    let bread = document.getElementById("bread").value;


    if(bread === "Artisan Italian"){
        subwayTotal = subwayTotal + 20;
    } else if(bread === "Wheat bread"){
        subwayTotal = subwayTotal + 15;
    } else if(bread === "Sourdough"){
        subwayTotal = subwayTotal + 10;
    } else if(bread === "Malted Rye"){
        subwayTotal = subwayTotal + 5
    }

    let meatOption = document.getElementsByName("meatOption");
    let topArray = [];
    for(let i = 0; i < meatOption.length; i++){
        if(meatOption[i].checked){
            topArray.push(meatOption[i].value);
            subwayTotal = subwayTotal + +meatOption[i].dataset.cost
        }
    }

    let vegetableOption = document.getElementsByName("vegetableOption");
    let vegArray = [];
    for(let i = 0; i < vegetableOption.length; i++){
        if(vegetableOption[i].checked){
            vegArray.push(vegetableOption[i].value);
            subwayTotal = subwayTotal + +vegetableOption[i].dataset.cost
        }
    }

    let cheeseOption = document.getElementsByName("cheeseOption");
    let cheArray = [];
    for(let i = 0; i < cheeseOption.length; i++){
        if(cheeseOption[i].checked){
            cheArray.push(cheeseOption[i].value);
            subwayTotal = subwayTotal + +cheeseOption[i].dataset.cost
        }
    }

    let veganOption = document.getElementsByName("veganOption");
    let veganArray = [];
    for(let i = 0; i < veganOption.length; i++){
        if(veganOption[i].checked){
            veganArray.push(veganOption[i].value);
            subwayTotal = subwayTotal + +veganOption[i].dataset.cost
        }
    }

    let sauceOption = document.getElementsByName("sauceOption");
    let sauceArray = [];
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            sauceArray.push(sauceOption[i].value);
            subwayTotal = subwayTotal + +sauceOption[i].dataset.cost
        }
    }

    subwayOrder.push({
        subwayName: subwayName,
        meatOption: topArray,
        vegetableOption: vegArray,
        cheeseOption: cheArray,
        veganOption: veganArray,
        subPrice: subwayTotal,
        sauceOption: sauceArray
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

    let meatOption = document.getElementsByName("meatOption");
    for(let i = 0; i < meatOption.length; i++){
        if(meatOption[i].checked){
            realTimePrice = realTimePrice + +meatOption[i].dataset.cost
        }
    }

    let vegetableOption = document.getElementsByName("vegetableOption");
    for(let i = 0; i < vegetableOption.length; i++){
        if(vegetableOption[i].checked){
            realTimePrice = realTimePrice + +vegetableOption[i].dataset.cost
        }
    }

    let cheeseOption = document.getElementsByName("cheeseOption");
    for(let i = 0; i < cheeseOption.length; i++){
        if(cheeseOption[i].checked){
            realTimePrice = realTimePrice + +cheeseOption[i].dataset.cost
        }
    }

    let veganOption = document.getElementsByName("veganOption");
    for(let i = 0; i < veganOption.length; i++){
        if(veganOption[i].checked){
            realTimePrice = realTimePrice + +veganOption[i].dataset.cost
        }
    }

    let sauceOption = document.getElementsByName("sauceOption");
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            realTimePrice = realTimePrice + +sauceOption[i].dataset.cost
        }
    }


    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ", 00"
}

displayOrder = () => {
     
    let area = document.getElementById("ORDERNOW");
    let total = document.getElementById("orderTotal")

    area.innerHTML = "";

    let overallTotal = 0;  

    for(let i = 0; i < subwayOrder.length; i++){

        let name = subwayOrder[i].subwayName;
        let bread = subwayOrder[i].bread;
        let meat = subwayOrder[i].meatOption;
        let vegetable = subwayOrder[i].vegetableOption;
        let cheese = subwayOrder[i].cheeseOption;
        let vegan = subwayOrder[i].veganOption;
        let sauce = subwayOrder[i].sauceOption;
        let price = subwayOrder[i].subPrice

        overallTotal += realTimePrice;

        area.innerHTML +=`
        <div class="card" style="width:250px">
            <div class="card-body">
                <h6 class="card-title">${name}</h6>
                <p class="card-text"><h7>Base:</h7>${bread}</p>
                <p class="card-text"><h7>Meat:</h7>${meat}</p>
                <p class="card-text"><h7>Vegetable:</h7>${vegetable}</p>
                <p class="card-text"><h7>Cheese:</h7>${cheese}</p>
                <p class="card-text"><h7>Vegan:</h7>${vegan}</p>
                <p class="card-text"><h7>Sauce:</h7>${sauce}</p>
            </div>
            <div class="money">
                <div class="col-box15" style="width: 50px; height: 50px; border-radius: 50%;"><h7>R${price}</h7></div>
            </div>
        </div>`

        total.innerHTML = "R" + overallTotal + ".00"
    }
}

checkOut = () => {
    let data = JSON.stringify(subwayOrder)
    localStorage.setItem('ORDERNOW', data)
    window.location.href = 'pages/pagethree.html'
}