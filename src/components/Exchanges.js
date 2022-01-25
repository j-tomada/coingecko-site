import React from 'react';
import './Exchanges.css'

const Exchanges = ( {theExchange} ) => {
    /**
     * Function used to bold certain parts of a line
     * @param {*} props 
     * @returns 
     */
    const b = (props) => (
        <div style={{fontweight: 'bold'}}>{props.children}</div>
    );

    return (
        <button className='exchange-container'>
            <header className='exchange-header'>
                <img className='exchange-img' src={theExchange.image}/>
                <h1 className='exchange-title'>{theExchange.name}</h1>
            </header>

            <ul>
                <div><b>Country: </b>{theExchange.country}</div>
                <div><b>Trust Rank: </b>{theExchange.trust_score_rank}</div>
                <div><b>URL: </b>{theExchange.url}</div>
            </ul>
        </button>
    );
}

export default Exchanges