import React, { Fragment, useContext} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const ParamInput = ({paramName, checked, type}) => {

    const {buildOptionalParamsObject, toggleOptionalParams} = useContext(MasterContext);

    return ( 

        <Fragment>
            <fieldset className="param-fieldset">
            <div className={`param-tooltip param-${paramName}`} data-title={paramName}></div>
            <label htmlFor={`${paramName}-checkbox`}>{paramName}</label>
            <input onClick={(e) => toggleOptionalParams(e)} type="checkbox" name={paramName} id={`${paramName}-checkbox`} value="" className="deeplinkParamCheckBox"/>
            <input onChange={(e) => buildOptionalParamsObject(e)}  type={type} id={`${paramName}-inputField`} name={paramName} placeholder={paramName} data-param={paramName} className="deeplinkParamValue"/>
            </fieldset>
        </Fragment>

     );
}
 
export default ParamInput;