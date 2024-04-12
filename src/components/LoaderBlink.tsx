import React from 'react'
 import "./../css/Loader.css"
type Props = {}

const LoaderBlink = (props: Props) => {
  return (
    <div className='card-load'>
      <div className="card__skeleton"></div>
    </div>
  )
}

export default LoaderBlink