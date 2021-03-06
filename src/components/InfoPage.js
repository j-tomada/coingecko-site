import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

/**
 * This component is displayed when an exchange is clicked.
 * When an exchange is clicked, the exchange data is sent to
 * this component as a parameter
 */
const InfoPage = ({ thisExchange }) => {

    /**
     * Function will check to see if the year_established is present
     * if it isn't, then it will simply return N/A
     */
    const yearExists = (year) => {
        if (year === null) {
            return "N/A";
        }
        else {
            return year;
        }
    }

    /**
     * Function will check to see if a description is given by the exchanges
     * If it isn't, then it will return a generic no descripton statement
     */
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
                    <img src={thisExchange.image} className='img-container'/>
                    <ul className='content'>
                        <li><b>Name: </b>{thisExchange.name}</li>
                        <li><b>Country: </b>{thisExchange.country}</li>
                        <li><b>Trust Rank: </b>{thisExchange.trust_score_rank}</li>
                        <li><b>Year of Establishment: </b>{yearExists(thisExchange.year_established)}</li>
                        {/*Social Media Link*/}
                        <li>
                            <b>URL: </b>
                            <a href={thisExchange.url}>{thisExchange.url}</a>
                        </li>
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