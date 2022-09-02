import { Header } from "./components"
import { useCurrencyRate } from "./hooks/useCurrencyRate"

export const App = () => {
    const currencyRate = useCurrencyRate()

    return (
        <div className="App">
            <Header currencyRate={currencyRate}/>
        </div>
    )
}
