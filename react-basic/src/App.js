import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h1> The Coins {isLoading ? null : `(${coins.length})`} </h1>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <select>
          {coins.map((element) => (
            <option key={element.id}>
              {element.symbol} {element.name} : ${element.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
