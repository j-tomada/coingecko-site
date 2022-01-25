import React from 'react';
import { Link } from 'react-router-dom'
import './InfoPage.css';

const InfoPage = ({ thisExchange }) => {

    /**
     * Function will check to see if the year_established is present
     * if it isn't, then it will simply return N/A
     * @param {*} year 
     * @returns 
     */
    const yearExists = (year) => {
        if (year === null) {
            return "N/A";
        }
        else {
            return year;
        }
    }

    const descExists = (desc) => {
        if (desc === "") {
            return "No description has been given by the establishment.";
        }
        else {
            return desc;
        }
    }

    return (
        <div className='background-container'>
            <div className='inner-container'>
                <Link to='/'>
                    <div className='return-container'>
                        Back to Main Menu
                    </div>
                </Link>
                <div className='upper-container'>
                    <img src={thisExchange.image} width='100px'/>
                    <ul className='content'>
                        <li><b>Name: </b>{thisExchange.name}</li>
                        <li><b>Country: </b>{thisExchange.country}</li>
                        <li><b>Trust Rank: </b>{thisExchange.trust_score_rank}</li>
                        <li><b>Year of Establishment: </b>{yearExists(thisExchange.year_established)}</li>
                    </ul>
                </div>

                <div className='desc-container'>
                    <header><b>Description</b></header>
                    <p>{descExists(thisExchange.description)}</p>
                </div>

            </div>
        </div>
    );
}

export default InfoPage;