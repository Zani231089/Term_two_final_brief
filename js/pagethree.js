checkOverall = () => {

    let data = JSON.parse(localStorage.getItem('ORDERNOW'))
    let items = document.getElementById('checkoutOrder')
    let totalArea = document.getElementById('totalOut')

    items.innerHTML = "";

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subwayName;
        let bread = data[i].bread;
        let meat = data[i].meatOption;
        let vegetable = data[i].vegetableOption;
        let cheese = data[i].cheeseOption;
        let vegan = data[i].veganOption;
        let sauce = data[i].sauceOption;
        let price = data[i].subPrice

        checkTotal += price;

        items.innerHTML += `
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
                <div class="col-box22" style="width: 50px; height: 50px; border-radius: 50%;"><h7>R${price}</h7></div>
            </div>
        </div>`

        totalArea.innerHTML = "R" +checkTotal + "0.00"
    }
}

resetReturn = () => {
    localStorage.removeItem('order')
    window.location.href = '../index.html'
}