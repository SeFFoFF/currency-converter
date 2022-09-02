import React from "react"
import "../assets/css/header.css"

export const Header = ({ currencyRate }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">

                    <h1 className="header__logo">Currency Converter</h1>

                    {
                        currencyRate.usd && currencyRate.eur
                            ?
                            <div className="header__currency-rate">
                                <span>USD {currencyRate.usd}</span>
                                <span>EUR {currencyRate.eur}</span>
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