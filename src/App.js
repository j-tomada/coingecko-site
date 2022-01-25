import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import InfoPage from './components/InfoPage';
import './App.css';

const App = () => {
  const [exchanges, setExchanges] = useState([]) //Exchanges stored here

  /**
   * useEffect runs once when MainPage Component is mounted
   */
  useEffect (() => {
      //URL of first 10 exchanges
      const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10';

      //Fetch data from API and convert it to a JSON file
      fetch(url)
      .then(response => response.json())
      .then(data => {
          //exchanges = data from the API
          setExchanges(data);
          console.log("API successfully fetched");
      });
  }, []);
  //Successful if this logs 10 items
  console.log(exchanges)

  const CreateRoutes = () => (
    <Routes>
      <Route path='/' element={<MainPage listExchange={exchanges} />} />
      {
        exchanges.map((value, key) => (
          <Route path={`/${value.id}/`} key={key} element={<InfoPage thisExchange={value}/>} />
        ))
      }
    </Routes>
  )

  return (
    <Router>
      {CreateRoutes()}
    </Router>
  );
}

export default App;
