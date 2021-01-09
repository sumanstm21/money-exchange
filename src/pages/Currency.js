import React, { useEffect, useState } from 'react';
import CurrencyRow from '../components/CurrencyRow';

// Link for fiat api
const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [secondAmount, setSecondAmount] = useState(true)
  // console.log(exchangeRate)
  // console.log(currencyOptions)

// condition for amount for both side conversion
  let toAmount, fromAmount
  if(secondAmount){
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }
    
// fetching and managing the data
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
      // .then(data => console.log(data))
  }, [])

// Setting the exchange rate  
useEffect(() => {
  if(fromCurrency != null && toCurrency != null){
    fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
  }
}, [fromCurrency, toCurrency])

function handleFromAmountChange(e) {
  setAmount(e.target.value)
  setSecondAmount(true)
}
      
function handleToAmountChange(e) {
  setAmount(e.target.value)
  setSecondAmount(false)
}

return (
  <div class="container">
    <h1>Convert Fiat Currency</h1>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <br />
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
);
}

export default Currency;