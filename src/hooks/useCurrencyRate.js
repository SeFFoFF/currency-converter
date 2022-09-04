import React, { useEffect, useState } from "react"
import { getNumberWithTwoDecimalPlaces } from "../utils"

export const useCurrencyRate = () => {
    const [currencyRate, setCurrencyRate] = useState({ USD: 0, EUR: 0 })

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            const json = await data.json()

            setCurrencyRate({
                USD: getNumberWithTwoDecimalPlaces(json[0].buy),
                EUR: getNumberWithTwoDecimalPlaces(json[1].buy)
            })
        }

        fetchData().catch(console.error)
    }, [])

    return {
        USD: currencyRate.USD,
        EUR: currencyRate.EUR
    }
}