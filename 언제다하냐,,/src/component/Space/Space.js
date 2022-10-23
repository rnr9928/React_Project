import React from 'react'

const Space = (props) => {

    document.title = 'Teemomart -' + props.title;
   return <div className='w-100'>{props.children}</div>

};

export default Space