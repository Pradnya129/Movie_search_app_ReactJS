import React from 'react'

export default function Loader(props) {
  return (
    <div className='container'>
       <div className="loader-container" id="loader-container">
        <span id="loader" className={props.loader === true ?'loader':'d-none' } ></span>
    </div>
    </div>
  )
}
