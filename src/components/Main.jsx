import React from "react"
import { ConverterBlock } from "./ConverterBlock"
import "../assets/css/main.css"

export const Main = ({ currencyRate }) => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__row">
                    <ConverterBlock currencyRate={currencyRate}/>
                </div>
            </div>
        </main>
    )
}