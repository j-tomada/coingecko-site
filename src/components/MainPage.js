import React, { useEffect, useState } from 'react';
import Header from './Header';
import Exchanges from './Exchanges';

const MainPage = () => {
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

    return (
        <div>
            <Header/>
            {
                /**
                 * Will go throughout each JSON in exchanges and
                 * create a component with pagination out of it
                 */
                exchanges.map((value, key) => (
                    <ul className='exchange-list'>
                        <Exchanges theExchange={value} key={key} />
                    </ul>
                ))
            }
        </div>
    );
}

export default MainPage