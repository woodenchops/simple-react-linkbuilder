import React, { Fragment } from 'react';

const PDFSection  = () => {
    return ( 
    <Fragment>
        <h3 className="title section-title download-title">Download Deeplink guide PDF:</h3>
        <section className="download-section section-container">
            <a href="./pdf/GW - Deeplinking - Customer Journey - Confluence.pdf" download>Deeplink guide</a>
        </section>
    </Fragment> 
    );
}
 
export default PDFSection;