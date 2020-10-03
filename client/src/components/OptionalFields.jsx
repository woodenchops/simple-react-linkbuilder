import React, { Fragment } from 'react';
import ParamInput from './ParamInput';
import paramsJson from '../assets/data/params.json';

const OptionalFields = () => {

    return ( 

        <Fragment>
        <h3 className="title section-title">Optional fields:</h3>

        <section className="params-container section-container">

            <div className="inner-param-container" id="paramContainer">
                {(paramsJson && paramsJson.length > 0 && paramsJson.map((param, idx) => (
                    <ParamInput paramName={param.paramName || 'No name given'} checked={param.checked || false} type={param.type || 'text'} description={param.description} key={idx}/> 
                )))}
            </div>

        </section>
        </Fragment>

     );
}
 
export default OptionalFields;