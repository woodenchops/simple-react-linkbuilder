import React, { Fragment, useContext} from 'react';
import ParamInput from './ParamInput';
import { MasterContext } from '../contexts/MasterContext';

const OptionalFields = () => {

    return ( 

        <Fragment>
        <h3 className="title section-title">Optional fields:</h3>

        <section className="params-container section-container">

            <div className="inner-param-container" id="paramContainer">
                <ParamInput paramName={'ctyhocn'} checked={false} type={'text'} />
                <ParamInput paramName={'spec_plan'} checked={false} type={'text'} />
            </div>

        </section>
        </Fragment>

     );
}
 
export default OptionalFields;