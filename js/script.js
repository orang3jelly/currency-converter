console.log("🤑");

let inputElement = document.querySelector(".js-inputPLN");
let currencyElement = document.querySelector(".js-selectCurrency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-operation");

let rateEUR = 4.3463;
let rateUSD = 4.0495;
let rateGBP = 5.0840;
let rateCHF = 4.5849;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let input = +inputElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "EUR":
      result = input / rateEUR;
      break;
    case "USD":
      result = input / rateUSD;
      break;
    case "GBP":
      result = input / rateGBP;
      break;
    case "CHF":
      result = input / rateCHF;
      break;
  }

  resultElement.innerText = `${input} PLN = ${result.toFixed(2)} ${currency}`;
});
