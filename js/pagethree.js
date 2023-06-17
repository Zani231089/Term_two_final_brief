displayCheck = () => {

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
                <p class="card-text">Bread:${bread}</p>
                <p class="card-text">Meat:${meat}</p>
                <p class="card-text">Vegetable:${vegetable}</p>
                <p class="card-text">Cheese:${cheese}</p>
                <p class="card-text">Vegan:${vegan}</p>
                <p class="card-text">Sauce:${sauce}</p>
                <p class="card-text">Price:R${price}</p>
            </div>
        </div>`

        totalArea.innerHTML = "R" +checkTotal + "0.00"
    }
}

resetReturn = () => {
    localStorage.removeItem('order')
    window.location.href = '../index.html'
}