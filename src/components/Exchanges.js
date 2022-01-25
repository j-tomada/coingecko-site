import React from 'react';
import './Exchanges.css'

const Exchanges = ( {theExchange} ) => {
    const url = theExchange.url;
    /**
     * Function checks to see if the exchange contains a url
     * Returns No url if there is none present
     * @param url from exchanges
     * @returns 
     */
    const hasURL = (url) => {
        if (hasURL === null) {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <div className='exchange-container'>
            <header className='exchange-header'>
                <img src={theExchange.image} width='75px' />
                <h1 className='exchange-title'>{theExchange.name}</h1>
            </header>

            <ul className='exchange-content'>
                <div><b>Country: </b>{theExchange.country}</div>
                <div><b>Trust Rank: </b>{theExchange.trust_score_rank}</div>
                {/*URL Link*/}
                <div>
                    <b>URL: </b>
                    <a className='exchange-link' href={url}>{url}</a>
                </div>
            </ul>
        </div>
    );
}

export default Exchanges