import React from "react"

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <figure>
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      </figure>
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p className="card--meta">
          <small>Release Date: {movie.release_date}</small>{" "}
          <small className="card--rating">RATING: {movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  )
}
