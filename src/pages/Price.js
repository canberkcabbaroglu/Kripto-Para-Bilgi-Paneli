import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../components/_dashboard/price/PriceCoin';

function Price() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="coin-app">
      <div>
        <h1 className="coin-text">Kripto Para Fiyatları</h1>
      </div>
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          volume={coin.total_volume}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
}

export default Price;
