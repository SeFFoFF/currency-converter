import React from "react"
import "../assets/css/currency-input.css"

export const CurrencyInput = ({ amount, setAmount, setCurrency, isFrom = true }) => {
    return (
        <div className="currency-input">
            <h4 className="currency-input__title">{ isFrom ? "From" : "To" }</h4>

            <div className="currency-input__wrapper">
                <select className="currency-input__select" onChange={(e) => setCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                </select>

                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
        </div>
    )
}