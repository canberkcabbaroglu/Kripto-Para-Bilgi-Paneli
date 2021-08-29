import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../components/_dashboard/exchange/ExchangeList';

function Exchange() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/exchanges')
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="coin-app">
      <div>
        <h1 className="coin-text">Kripto Para Borsaları</h1>
      </div>
      {coins.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          url={coin.url}
          country={coin.country}
          year={coin.year_established}
          image={coin.image}
          price={coin.trade_volume_24h_btc_normalized}
        />
      ))}
    </div>
  );
}

export default Exchange;
