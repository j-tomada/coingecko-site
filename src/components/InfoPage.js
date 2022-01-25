import React from 'react';
import './InfoPage.css';

const InfoPage = ({ thisExchange }) => {
    return (
        <div className='background-container'>
            <div className='inner-container'>
                <div className='upper-container'>
                    <img src={thisExchange.image} width='100px' />
                    <ul className='content'>
                        <li><b>Name: </b>{thisExchange.name}</li>
                        <li><b>Country: </b>{thisExchange.country}</li>
                        <li><b>Trust Rank: </b>{thisExchange.trust_score_rank}</li>
                        <li><b>Year of Establishment: </b>{thisExchange.year_established}</li>
                    </ul>

                </div>

            </div>
        </div>
    );
}

export default InfoPage;