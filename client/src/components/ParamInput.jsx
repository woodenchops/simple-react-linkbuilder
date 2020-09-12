import React, { Fragment, useContext, useState} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const ParamInput = ({paramName, checked, type}) => {

    const {buildOptionalParamsObject, toggleOptionalParams} = useContext(MasterContext);

    const [checkedState, setCheckedState] = useState(checked);

    return ( 

        <Fragment>
            {(paramName) && (
                <fieldset className="param-fieldset">
                    <div className={`param-tooltip param-${paramName}`} data-title={paramName}></div>
                    <label htmlFor={`${paramName}-checkbox`}>{paramName}</label>
                    <input onClick={(e) => {toggleOptionalParams(e); setCheckedState(!checkedState);}} type="checkbox" name={paramName} id={`${paramName}-checkbox`} value="" className="deeplinkParamCheckBox" checked={checkedState}/>
                    <input onChange={(e) => buildOptionalParamsObject(e)}  type={type} id={`${paramName}-inputField`} name={paramName} placeholder={paramName} data-param={paramName} className="deeplinkParamValue"/>
                </fieldset>
            )}
        </Fragment>

     );
}
 
export default ParamInput;