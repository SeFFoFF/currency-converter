import React from "react"
import { CurrencyInput } from "./CurrencyInput"
import "../assets/css/converter-block.css"

export const ConverterBlock = () => {
    return (
        <div className="converter-block">
            <div className="converter-block__row">
                <CurrencyInput/>
                <CurrencyInput isFrom={false}/>
            </div>
            <div className="converter-block__row">
                <p className="converter-block__result">{ 1.00 } USD = </p>
                <p className="converter-block__result">{ 0.99 } EUR</p>
            </div>
        </div>
    )
}