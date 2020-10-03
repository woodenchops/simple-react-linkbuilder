import React, { Fragment, useContext, useState, useCallback} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const ParamInput = ({paramName, checked, type, description}) => {

    const {buildOptionalParamsObject, toggleOptionalParams} = useContext(MasterContext);

    const [checkedState, setCheckedState] = useState(checked);

    const handleCheckBox = useCallback( (e) => { toggleOptionalParams(e); setCheckedState(!checkedState);}, [checkedState, toggleOptionalParams] );
    const handleInput = useCallback( (e) => {buildOptionalParamsObject(e); (e.target.value.length <= 0) && setCheckedState(false);}, [buildOptionalParamsObject] );

    return ( 

        <Fragment>
            {(paramName) && (
                <fieldset className="param-fieldset">
                    <div className={`param-tooltip param-${paramName}`} data-title={description || paramName}></div>
                    <label htmlFor={`${paramName}-checkbox`}>{paramName}</label>
                    <input onClick={(e) => handleCheckBox(e)} type="checkbox" name={paramName} id={`${paramName}-checkbox`} defaultValue="" className="deeplinkParamCheckBox" checked={checkedState}/>
                    <input onChange={(e) => handleInput(e)} type={type} id={`${paramName}-inputField`} name={paramName} placeholder={paramName} data-param={paramName} className="deeplinkParamValue"/>
                </fieldset>
            )}
        </Fragment>

     );
}
 
export default ParamInput;