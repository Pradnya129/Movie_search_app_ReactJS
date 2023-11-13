import React from 'react'


export default function MovieContainer(props) {

    
  return (
    <div>
       <section id='movie' className={props.display === true ? 'd-block' : 'd-none'} >
       
       <div className= 'movie-container ' id="movie-container">
<div className="movie-details">
<h1 >{props.title}</h1>
<p id="desc">{props.desc}</p>
<p >Released : {props.released}</p>
<p >Director : {props.director}</p>
<p >Actors : {props.actor}</p>
<p >Awards : {props.award}</p>
<p >collection : {props.coll}</p>
<p >Language : {props.lang}</p>
</div>
       <div className="img-container">
        <div className="movie-img">
       <img src={props.src} alt="" id="img"/>
       <div className="ratings" id="rating">
       {props.ratings}
       </div>
       <div className="genre" id="genre">
       {props.genre}
       </div>
       </div>
       </div>
</div>
</section>
    </div>
  )
}
