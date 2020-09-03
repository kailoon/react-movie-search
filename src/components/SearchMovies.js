import React, { useState } from "react"
import MovieCard from "./MovieCard"
export default function SearchMovies() {
  // states - input query, movies
  const [query, setQuery] = useState("")

  // create the state for movies, and update that state approprately
  const [movies, setMovies] = useState([])

  const SearchMovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          placeholder="i.e: Jurassic Park"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  )
}
