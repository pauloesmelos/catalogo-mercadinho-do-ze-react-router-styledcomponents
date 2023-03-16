import React from 'react';

const padrao = {
    attributes: true,
    characterData: true,
    childList: true
}
const useMutationObserver = (target,callback,options = padrao) => {
    React.useEffect(() => {
        if(target.current){
            console.log('chamou');
            const observer = new MutationObserver(callback,options); 
            callback();
            return () => observer.disconnect();  
        }
    },[target,callback,options]);
}

export default useMutationObserver;