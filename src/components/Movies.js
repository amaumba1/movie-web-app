import React, { Component }from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {

  state = {
    movies: [],
    isLoaded: false,
    error: null
  };

    componentDidMount() {
      fetch('http://localhost:4000/v1/movies')
      //.then(res => res.json())
      .then(res => {
        console.log("status code is", res.status);
        if (res.status !== 200) {
          let err = Error
          err.message = "Invalid status code: " + res.status;
          this.setState({ error: err });
        }
        return res.json();
      })
      .then(data => this.setState({ movies: data.movies, isLoaded: true },
        (error) => {
          this.setState({ isLoaded: true, error: error });
        }))
      }
    

    render() {
      const { movies, isLoaded, error } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
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