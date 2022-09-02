import React, { useEffect, useState } from "react"

export const useCurrencyRate = () => {
    const [currencyRate, setCurrencyRate] = useState({ usd: 0, eur: 0 })

    useEffect(() => {
        const myHeaders = new Headers()
        myHeaders.append("apikey", "s62visFsFzeU6D6oIYOgKESFADAHQtsD")

        const requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: myHeaders
        }

        const fetchData = async () => {
            const usdData = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=USD&amount=1", requestOptions)
            const usdJson = await usdData.json()

            const eurData = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=EUR&amount=1", requestOptions)
            const eurJson = await eurData.json()

            setCurrencyRate({
                usd: usdJson.info.rate.toFixed(2),
                eur: eurJson.info.rate.toFixed(2)
            })
        }

        fetchData().catch(console.error)
    }, [])

    return {
        usd: currencyRate.usd,
        eur: currencyRate.eur
    }
}