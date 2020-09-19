import React, {useContext, useEffect, useState} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const Result = () => {

    const {protocol, environment, locale, brand, book, queryString, clearUrl} = useContext(MasterContext);

    const [url, setUrl] = useState('');

    useEffect(() => {

        setUrl(`${protocol}${environment}${locale}${brand}${book}${queryString}`);
        
    }, [protocol, environment, locale, brand, book, queryString, clearUrl]);

    return ( 
        <section className="results-container section-container">

            <fieldset>
                 <textarea id="result" placeholder={protocol} onChange={(e) => setUrl(e.target.value)} value={url}></textarea>
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