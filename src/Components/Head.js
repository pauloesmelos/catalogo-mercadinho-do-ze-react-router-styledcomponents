import React from 'react';

const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title;
        document.querySelector('meta[name="description"]').setAttribute('content',props.description);
        const keywords = document.querySelector('meta[name="keywords"]');
        if(!keywords){
            const keywords = document.createElement('meta');
            keywords.setAttribute('name','keywords');
            keywords.setAttribute('content',props.description);
            document.querySelector('head').appendChild(keywords);
        }
        else
            keywords.setAttribute('content',props.description);
    },[props]);
  return (
    <>

    </>
  )
}

export default Head;