import React, {useContext, useEffect, useCallback} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const NotificationBar = () => {

    const {showNotification, setNotification, warnings} = useContext(MasterContext);

    const handleNotification = useCallback(() => {
        if(showNotification){
            setTimeout(() => {
                setNotification(false);
            }, 2000);
        } 
    }, [setNotification, showNotification]);

    useEffect(() => {
        handleNotification();
    }, [handleNotification]);

    const success = {
        backgroundColor: '#5cd882'
    };

    const error = {
        backgroundColor: 'red'
    };

    const message =  warnings && warnings.error ? warnings.error : 'link copied';

    return ( 
        <div id="copy-notification" className={(showNotification) ? 'show' : ''} style={warnings.error ? error : success} aria-label={message} aria-live="assertive">
            <p>{message}</p>
        </div>
     );
}
 
export default NotificationBar;