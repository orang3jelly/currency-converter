let formElement = document.querySelector(".js-form");

const calculateResult = (input, currency) => {
  let rateEUR = 4.3463;
  let rateUSD = 4.0495;
  let rateGBP = 5.084;
  let rateCHF = 4.5849;

  switch (currency) {
    case "EUR":
      return input / rateEUR;

    case "USD":
      return input / rateUSD;

    case "GBP":
      return input / rateGBP;

    case "CHF":
      return input / rateCHF;
  }
};

const updateResultText = (input, result, currency) => {
  const resultElement = document.querySelector(".js-operation");
  resultElement.innerText = `${input} PLN = ${result.toFixed(2)} ${currency}`;
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const inputElement = document.querySelector(".js-inputPLN");
  const currencyElement = document.querySelector(".js-selectCurrency");

  const input = +inputElement.value;
  const currency = currencyElement.value;

  const result = calculateResult(input, currency);

  updateResultText(input, result, currency);
};
