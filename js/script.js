let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-inputPLN");
let currencyElement = document.querySelector(".js-selectCurrency");
let operationElement = document.querySelector(".js-operation");

let rateEUR = 4.7146;
let rateUSD = 4.7328;
let rateCHF = 4.7905;
let rateGBP = 5.3795;

formElement.addEventListener("submit", (event) =>{
    event.preventDefault();

    let money = +inputElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency){
        case "EUR":
            result = money / rateEUR;
            break;
        case "USD":
            result = money / rateUSD;
            break;
        case "CHF":
            result = money / rateCHF;
            break;
        case "GBP":
            result = money / rateGBP;
            break;
    }
   operationElement.innerText = `${money.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});