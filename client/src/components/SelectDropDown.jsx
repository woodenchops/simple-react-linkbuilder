import React, {useContext} from 'react';
import { MasterContext } from '../contexts/MasterContext';


 const SelectDropDown = ({jsondata, id, defaultOption, val} ) => {


    const {generateUrl} = useContext(MasterContext);

    const loopThroughJsonData = (data) => {

        return data && data.length > 0 && data.map((item, index) => (
             <option key={index} value={item.value}>{item.label}</option>
         ))
     
     };

    return ( 

    <fieldset>
        <label htmlFor={id}></label>
        <select onChange={(e) => generateUrl(e)} value={val} id={id} className="linkField">
            <option disabled defaultValue> {defaultOption} </option>
            {loopThroughJsonData(jsondata)}
        </select>
    </fieldset>

     );
}
 
export default SelectDropDown;