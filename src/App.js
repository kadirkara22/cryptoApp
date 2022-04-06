import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      }).catch(error => console.log(error))

  }, [])

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  console.log(coins)
  return (
    <div className="App">
      <Header setSearch={setSearch} />
      {
        filteredCoins.map(coin => (
          <Content
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        ))
      }
    </div>
  );
}

export default App;
