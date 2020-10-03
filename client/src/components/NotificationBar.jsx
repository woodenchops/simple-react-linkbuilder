import React, {useContext, useEffect, useCallback} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const NotificationBar = () => {

    const {isCopied, setIsCopied, warnings} = useContext(MasterContext);

    const handleNotification = useCallback(() => {
        if(isCopied || warnings.error){
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [isCopied, setIsCopied, warnings.error]);

    useEffect(() => {
        handleNotification();
    }, [handleNotification]);

    const success = {
        backgroundColor: '#5cd882'
    };

    const error = {
        backgroundColor: 'red'
    };

    return ( 
        <div id="copy-notification" className={(isCopied || warnings.error) ? 'show' : ''} style={warnings.error ? error : success} aria-label="link has been copied" aria-live="assertive">
            <p>{warnings.error ? warnings.error : 'link has been copied!'}</p>
        </div>
     );
}
 
export default NotificationBar;