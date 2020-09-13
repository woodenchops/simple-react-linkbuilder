import React, {useContext, useEffect} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const Result = () => {


    const {protocol, environment, locale, brand, book, queryString, clearUrl} = useContext(MasterContext);

    useEffect(() => {
        
    }, [environment, locale, brand, book ]);

    return ( 
        <section className="results-container section-container">

            <fieldset>
                 <textarea id="result" placeholder={protocol} value={`${protocol}${environment}${locale}${brand}${book}${queryString}`}></textarea>
            </fieldset>

            <section className="result-cta-section section-container">
                    <button id="copyText" className="btn">Copy Link</button>
                    <button id="testLink" className="btn">Test Link</button>
                    <button id="clearInput" className="btn" onClick={() => clearUrl()}>Clear</button>
            </section>
         
        </section>
     );
}
 
export default Result;