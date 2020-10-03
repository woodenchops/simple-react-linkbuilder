import React, { Fragment, useContext, useCallback} from 'react'
import EnvJSON from '../assets/data/env.json';
import LocaleJSON from '../assets/data/locale.json';
import BrandJSON from '../assets/data/brand.json';
import SearchJSON from '../assets/data/searchBook.json';
import SelectDropDown from './SelectDropDown';
import { MasterContext } from '../contexts/MasterContext';

const RequiredFields = () => {

    const {createStandardDeeplink, createOHWDeeplink, environment, locale, brand, book, standardDeeplink, OHWDeeplink} = useContext(MasterContext);
    
    return ( 
        <Fragment>
            <h3 className="title section-title">Required fields:</h3>

            <section className="button-container section-container">

                <button onClick={useCallback(() => createOHWDeeplink(), [createOHWDeeplink])} id="ohw-generator" className={`btn ${(OHWDeeplink ? 'active' : '')} link-generator btn--first`}>Create OHW Link</button>

                <button onClick={useCallback(() => createStandardDeeplink(), [createStandardDeeplink])} id="standard-generator" className={`btn ${(standardDeeplink ? 'active' : '')}  link-generator`}>Create Standard Deep Link</button>

            </section>

            <section className="select-dropdown-container section-container">

                <SelectDropDown jsondata={EnvJSON} id="environment" val={environment} defaultOption="-- select an environment -- "/>
                <SelectDropDown jsondata={LocaleJSON} id="locale" val={locale} defaultOption="-- select locale -- "/>
                <SelectDropDown jsondata={BrandJSON} id="brand"  val={brand} defaultOption="-- select brand -- "/>
                <SelectDropDown jsondata={SearchJSON} id="book"  val={book} defaultOption="-- book or search -- "/>

            </section>
        </Fragment>

     );
}
 
export default RequiredFields;