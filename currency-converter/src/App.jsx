
import { useState } from 'react'

import InputBox from './components/InputBox'
import useCurrencyInfo  from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  }



  return (
    <div
  className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/digital-currency-indain-rupee-symbol-background-with-circuit-lines_1017-45128.jpg?t=st=1742321638~exp=1742325238~hmac=5ec2d9fd957077257999db475fa7f4c4cd17e4db7f0481a122e057392a5b1c8e&w=1380')"
  }}
>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(currency) => setFromCurrency(currency)}
                            selectCurrency={fromCurrency}
                            onAmountChange={(amount) => setAmount(amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(currency) => setToCurrency(currency)}
                            selectCurrency={toCurrency}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {amount} {fromCurrency} to {toCurrency}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default App
