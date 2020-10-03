import React, {useContext, useCallback} from 'react';
import { MasterContext } from '../contexts/MasterContext';


 const SelectDropDown = ({jsondata, id, defaultOption, val} ) => {


    const {buildRequiredFields} = useContext(MasterContext);

    const loopThroughJsonData = (data) => {

        return data && data.length > 0 && data.map((item, index) => (
             <option key={index} value={item.value}>{item.label}</option>
         ))
     
     };

     const handleSelect = useCallback( (e) => buildRequiredFields(e), [buildRequiredFields] )

    return ( 

    <fieldset>
        <label htmlFor={id}></label>
        <select onChange={(e) => handleSelect(e)} value={val} id={id} className="linkField">
            <option disabled defaultValue> {defaultOption} </option>
            {loopThroughJsonData(jsondata)}
        </select>
    </fieldset>

     );
}
 
export default SelectDropDown;