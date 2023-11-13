import React from 'react'

export default function IntroContainer(props) {
  return (
    <div >
       
    <div className={`intro-container ${props.intro === true ? 'd-none' : 'd-block'}`} id="intro-container">
        <h1>Want the complete <span className="highlight">
            details of a movie?
        </span> </h1>
        <p>Search for the movie name and get complete details including direacters, actors, IMDB ratings, Votes, Earnings and more interesting facts.</p>
    </div>
    </div>
  )
}
