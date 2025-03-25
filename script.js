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
      .innerHTML = `${targetCurrencyValue}`;

  } catch(error) {
    console.warn('Error accessing the exchange rate:', error);
    alert('Error accessing the exchange rate. Please try again.');
  }
}

// -------------------------------------------------------------------------------

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

// WE ARE TAKING 3 VALUES
// BASE CURRENCY, BASE CURRENCY VALUE, TARGET CURRENCY
// WE HAVE TO DISPLAY BASE CURRENCY AND ITS VALUE
// ALONG WITH TARGET CURRENCY AND ITS VALUE

/*
  When we click the submit button, it should take the values we inserted and pass them to the API.
  Then the API will fetch for the relevant data and give us the required data.
  After doing so, we'll display target and base currency rates accordingly.
*/

/*
  // DISPLAY MAP:
  BASE_CURRENCY       ${baseCurrency}                                    VALUE_WE_PROVIDED     $[value]
  TARGET_CURRENCY     ${targetCurrencyCode}                              VALUE_WE_FETCHED      ${targetCurrencyValue}
*/