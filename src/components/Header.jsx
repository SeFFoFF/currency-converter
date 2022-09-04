import React from "react"
import "../assets/css/header.css"

export const Header = ({ currencyRate }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">

                    <h1 className="header__logo">Currency Converter</h1>

                    {
                        currencyRate.USD && currencyRate.EUR
                            ?
                            <div className="header__currency-rate">
                                <span>USD {currencyRate.USD}</span>
                                <span>EUR {currencyRate.EUR}</span>
                            </div>
                            :
                            <div className="header__currency-rate">
                                <span>Loading...</span>
                            </div>
                    }

                </div>
            </div>
        </header>
    )
}