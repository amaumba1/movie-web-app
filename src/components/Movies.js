import React, { Component }from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {

  state = {
    movies: [],
    isLoaded: false
  };

    componentDidMount() {
      fetch('http://localhost:4000/v1/movies')
      .then(res => res.json())
      .then(data => this.setState({ movies: data.movies, isLoaded: true }));
    }

    render() {
      const { movies, isLoaded } = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <h2>Movie Lists</h2>
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  <p>{movie.year}</p>
                  <p>{movie.director}</p>
                  <p>{movie.rating}</p>
                  <p>{movie.synopsis}</p>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  }
}

export default Movies;