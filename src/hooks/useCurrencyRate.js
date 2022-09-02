import React, { useEffect, useState } from "react"

export const useCurrencyRate = () => {
    const [currencyRate, setCurrencyRate] = useState({ usd: 0, eur: 0 })

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            const json = await data.json()

            setCurrencyRate({
                usd: Number(json[0].buy).toFixed(2),
                eur: Number(json[1].buy).toFixed(2)
            })
        }

        fetchData().catch(console.error)
    }, [])

    return {
        usd: currencyRate.usd,
        eur: currencyRate.eur
    }
}