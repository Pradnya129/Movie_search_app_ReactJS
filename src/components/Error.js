import React from 'react'
import error from '../oops_error.png';
export default function Error(props) {
  return (
    <div className={`container ${props.error === true ? 'd-block' :'d-none'}`}>
        <div className="error-container " id="error-container">
        <img src = {error}  className="error-img" alt=""/>
        <h1 className="error" id="error">Movie Not Found!</h1>
    </div>
    </div>
  )
}
