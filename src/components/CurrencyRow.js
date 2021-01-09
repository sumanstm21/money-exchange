import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div class="row">
            <div class="col-md-4">
                <input type="number" value={amount} onChange={onChangeAmount} class="form-control"/>
            </div>
            <div class="col-md-4">
                <select value={selectCurrency} onChange={onChangeCurrency} class="custom-select">
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
