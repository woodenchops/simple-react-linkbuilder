import React from 'react'
import HiltonLogo from '../assets/icons/hi-black.svg';

const Header = () => {
    return ( 
        <header>

            <div id="copy-notification" aria-label="link has been copied" aria-live="assertive">
                <p>Link has been copied!</p>
            </div>

            <img src={HiltonLogo} className="logo" alt="hilton hotels logo" />

        </header>
     );
}
 
export default Header;