async function fetchExchangeRates(baseCurrency, value, currencies) {
  const apiKey = 'cur_live_CifPKhobAlIW7Y5m0kWLOU78cMsu6JwzzOcZRKrD';
  const currencyURL = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${baseCurrency}&value=${value}&currencies=${currencies}`;
  // Example URL: v3/latest?apikey=cur_live_CifPKhobAlIW7Y5m0kWLOU78cMsu6JwzzOcZRKrD&base_currency=USD&value=1&currencies=PKR

  try {
    response = await fetch(currencyURL);
    dataobj = await response.json();

    targetCurrencyCode = dataobj.data[currencies].code;
    targetCurrencyValue = (dataobj.data[currencies].value).toFixed(2);

    // DISPLAY SECTION - FOR TARGET CURRENCY
    document.querySelector('.currency-code-secondary')
      .innerHTML = `${targetCurrencyCode}`;
    document.querySelector('.currency-rate-secondary')
      .innerHTML = `${targetCurrencyValue * value}`;

  } catch(error) {
    console.warn('Error accessing the exchange rate:', error);
    alert('Error accessing the exchange rate. Please try again.');
  }
}

function fetchValues() {
  baseCurrency = document.getElementById('base-currency').value;
  console.log(baseCurrency);
  value = document.getElementById('currency-value').value;
  console.log(value);
  currencies = document.getElementById('target-currencies').value;
  console.log(currencies);

  // DISPLAY SECTION - FOR BASE CURRENCY
  document.querySelector('.currency-code-primary')
    .innerHTML = `${baseCurrency}`;
  document.querySelector('.currency-rate-primary')
    .innerHTML = `${value}`;

  fetchExchangeRates(baseCurrency, value, currencies);
}