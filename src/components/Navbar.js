import React from 'react'

export default function Navbar(props) {
  return (
    <div>
       <div className="navbar">
            <input type="text" id="movieName"  placeholder="Enter movie name "/>
            <button className="btn" onClick={props.fetch}>Search Movie</button>
        </div>
    </div>
  )
}
