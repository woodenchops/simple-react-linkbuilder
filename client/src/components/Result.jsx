import React, {useContext, useEffect, useState, useRef} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const Result = () => {

    const {protocol, environment, locale, brand, book, queryString, clearUrl, manuallyOverrideUrl, setNotification, updateWarings} = useContext(MasterContext);

    const [url, setUrl] = useState('');

    const textArea = useRef(null);

   const copyUrl = () => {
       if(!url) {
        updateWarings({error: 'No link to copy!'});
        setNotification(true);
       } else {
        textArea.current.select();
        document.execCommand("copy");
        setNotification(true);
       }
    };

    const testLink = () => {
        if(!url){
            updateWarings({error: 'No link to test!'});
            setNotification(true);
        } else {
            window.open(url);
        }
    };

    useEffect(() => {

        setUrl(`${protocol}${environment}${locale}${brand}${book}${queryString}`);
        
    }, [protocol, environment, locale, brand, book, queryString, clearUrl, manuallyOverrideUrl]);

    return ( 
        <section className="results-container section-container">

            <fieldset>
                 <textarea ref={textArea} id="result" placeholder={'https://'} onChange={(e) => {setUrl(e.target.value); manuallyOverrideUrl(e)}} value={url}></textarea>
            </fieldset>

            <section className="result-cta-section section-container">
                    <button id="copyText" className="btn" onClick={() => copyUrl()}>Copy Link</button>
                    <button id="testLink" className="btn" onClick={() => testLink()}>Test Link</button>
                    <button id="clearInput" className="btn" onClick={() => {clearUrl(); setUrl('');}}>Clear</button>
            </section>
         
        </section>
     );
}
 
export default Result;