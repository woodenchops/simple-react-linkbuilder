import React from 'react';
import HiltonLogo from '../assets/icons/hi-black.svg';
import NotificationBar from './NotificationBar';


const Header = () => {
    return ( 
        <header>
            <NotificationBar/>
            <img src={HiltonLogo} className="logo" alt="hilton hotels logo" />
        </header>
     );
}
 
export default Header;