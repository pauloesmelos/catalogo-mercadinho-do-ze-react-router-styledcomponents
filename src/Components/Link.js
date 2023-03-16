import React from 'react';

const Link = ({content,...props}) => {
    //href é passado pelas ...props
  return (
    <a target='_blank' {...props} style={{marginRight: '2rem',marginTop: '2rem'}}>{content}</a>
  )
}

export default Link;