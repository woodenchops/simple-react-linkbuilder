import React, { Fragment } from 'react';
import ParamInput from './ParamInput';

const OptionalFields = () => {

    return ( 

        <Fragment>
        <h3 className="title section-title">Optional fields:</h3>

        <section className="params-container section-container">

            <div className="inner-param-container" id="paramContainer">
                <ParamInput paramName={'ctyhocn'} checked={true} type={'text'} />
                <ParamInput paramName={'spec_plan'} checked={false} type={'text'} />
            </div>

        </section>
        </Fragment>

     );
}
 
export default OptionalFields;