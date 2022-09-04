import React, { useState } from "react"
import { CurrencyInput } from "./CurrencyInput"
import { getNumberWithTwoDecimalPlaces } from "../utils"
import "../assets/css/converter-block.css"

export const ConverterBlock = ({ currencyRate }) => {
    const [firstAmount, setFirstAmount] = useState(100)
    const [secondAmount, setSecondAmount] = useState(100)

    const [firstCurrency, setFirstCurrency] = useState("USD")
    const [secondCurrency, setSecondCurrency] = useState("USD")

    const firstAmountHandler = (firstAmount) => {
        if (firstCurrency === "UAH" && secondCurrency === "UAH") {
            setSecondAmount(firstAmount)
            setFirstAmount(firstAmount)
        } else if (firstCurrency === "UAH") {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount / currencyRate[secondCurrency]))
            setFirstAmount(firstAmount)
        } else if (secondCurrency === "UAH") {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount * currencyRate[firstCurrency]))
            setFirstAmount(firstAmount)
        } else {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount * currencyRate[secondCurrency] / currencyRate[firstCurrency]))
            setFirstAmount(firstAmount)
        }
    }

    const firstCurrencyHandler = (firstCurrency) => {
        if (firstCurrency === "UAH" && secondCurrency === "UAH") {
            setSecondAmount(firstAmount)
            setFirstAmount(firstAmount)
            setFirstCurrency(firstCurrency)
        } else if (firstCurrency === "UAH") {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount / currencyRate[secondCurrency]))
            setFirstCurrency(firstCurrency)
        } else if (secondCurrency === "UAH") {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount * currencyRate[firstCurrency]))
            setFirstAmount(firstAmount)
            setFirstCurrency(firstCurrency)
        } else {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount * currencyRate[secondCurrency] / currencyRate[firstCurrency]))
            setFirstCurrency(firstCurrency)
        }
    }

    const secondAmountHandler = (secondAmount) => {
        if (firstCurrency === "UAH" && secondCurrency === "UAH") {
            setSecondAmount(secondAmount)
            setFirstAmount(secondAmount)
        } else if (secondCurrency === "UAH") {
            setFirstAmount(getNumberWithTwoDecimalPlaces(secondAmount / currencyRate[firstCurrency]))
            setSecondAmount(secondAmount)
        } else if (firstCurrency === "UAH") {
            setFirstAmount(getNumberWithTwoDecimalPlaces(secondAmount * currencyRate[secondCurrency]))
            setSecondAmount(secondAmount)
        } else {
            setFirstAmount(getNumberWithTwoDecimalPlaces(secondAmount * currencyRate[firstCurrency] / currencyRate[secondCurrency]))
            setSecondAmount(secondAmount)
        }
    }

    const secondCurrencyHandler = (secondCurrency) => {
        if (firstCurrency === "UAH" && secondCurrency === "UAH") {
            setSecondAmount(firstAmount)
            setFirstAmount(firstAmount)
            setSecondCurrency(secondCurrency)
        } else if (secondCurrency === "UAH") {
            setSecondAmount(getNumberWithTwoDecimalPlaces(secondAmount / currencyRate[firstCurrency]))
            setSecondCurrency(secondCurrency)
        } else if (firstCurrency === "UAH") {
            setFirstAmount(getNumberWithTwoDecimalPlaces(secondAmount * currencyRate[secondCurrency]))
            setSecondAmount(secondAmount)
            setSecondCurrency(secondCurrency)
        } else {
            setSecondAmount(getNumberWithTwoDecimalPlaces(firstAmount * currencyRate[secondCurrency] / currencyRate[firstCurrency]))
            setSecondCurrency(secondCurrency)
        }
    }

    return (
        <div className="converter-block">
            <div className="converter-block__row">
                <CurrencyInput
                    amount={firstAmount}
                    setAmount={firstAmountHandler}
                    currency={firstCurrency}
                    setCurrency={firstCurrencyHandler}
                />
                <CurrencyInput
                    amount={secondAmount}
                    setAmount={secondAmountHandler}
                    currency={secondCurrency}
                    setCurrency={secondCurrencyHandler}
                    isFrom={false}
                />
            </div>
        </div>
    )
}