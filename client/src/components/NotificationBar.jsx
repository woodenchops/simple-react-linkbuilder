import React, {useContext, useEffect, useCallback} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const NotificationBar = () => {

    const {isCopied, setIsCopied} = useContext(MasterContext);

    const handleNotification = useCallback(() => {
        if(isCopied){
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        }
    }, [isCopied, setIsCopied]);

    useEffect(() => {
        handleNotification();
    }, [handleNotification])

    return ( 
        <div id="copy-notification" className={isCopied ? 'show' : ''} aria-label="link has been copied" aria-live="assertive">
            <p>Link has been copied!</p>
        </div>
     );
}
 
export default NotificationBar;