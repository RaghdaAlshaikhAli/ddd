import React from 'react'

const Block = ({text,title}) => {
  return (
    <div className='block'>
        <div className="left-block">{title}</div>
        <div className="right-block">{text}</div>
    </div>
  )
}

export default Block