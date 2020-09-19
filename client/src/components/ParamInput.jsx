import React, { Fragment, useContext, useState, useEffect} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const ParamInput = ({paramName, checked, type}) => {

    const {buildOptionalParamsObject, toggleOptionalParams} = useContext(MasterContext);

    const [checkedState, setCheckedState] = useState(checked);

    useEffect(() => {
      
    }, [checkedState]);

    return ( 

        <Fragment>
            {(paramName) && (
                <fieldset className="param-fieldset">
                    <div className={`param-tooltip param-${paramName}`} data-title={paramName}></div>
                    <label htmlFor={`${paramName}-checkbox`}>{paramName}</label>
                    <input onClick={(e) => {toggleOptionalParams(e); setCheckedState(!checkedState);}} type="checkbox" name={paramName} id={`${paramName}-checkbox`} defaultValue="" className="deeplinkParamCheckBox" checked={checkedState}/>
                    <input onChange={(e) => {buildOptionalParamsObject(e); (e.target.value.length <= 0) && setCheckedState(false);}} type={type} id={`${paramName}-inputField`} name={paramName} placeholder={paramName} data-param={paramName} className="deeplinkParamValue"/>
                </fieldset>
            )}
        </Fragment>

     );
}
 
export default ParamInput;