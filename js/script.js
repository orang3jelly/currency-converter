{
    const calculateResult = (money, currency) => {
        const rateEUR = 4.7146;
        const rateUSD = 4.7328;
        const rateCHF = 4.7905;
        const rateGBP = 5.3795;

        switch (currency) {
            case "EUR":
                return money / rateEUR;

            case "USD":
                return money / rateUSD;

            case "CHF":
                return money / rateCHF;

            case "GBP":
                return money / rateGBP;

        }
    }

    const updateResultText = (money, result, currency) => {
        const operationElement = document.querySelector(".js-operation");

        operationElement.innerText = `${money.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-inputPLN");
        const currencyElement = document.querySelector(".js-selectCurrency");

        const money = +inputElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(money, currency);

        updateResultText(money, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}