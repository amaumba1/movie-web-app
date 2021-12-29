import React, { Component }from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {

  state = {
    movies: [
      // {
      //   id: 1,  title: 'The Shawshank Redemption',    year: 1994,     
      //   director: 'Frank Darabont',
      //   poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
      //   rating: 9.3,
      //   synopsis: 'Two imprisoned'  
      // },
      // {
      //   id: 2,  title: 'The Godfather',    year: 1972,
      //   director: 'Francis Ford Coppola', 
      //   poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      //   rating: 9.2,
      //   synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
      // }
      ]};

    componentDidMount() {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(data => this.setState({ movies: data }));
    }

  render() {
      return (
        <div>
          <h2>Movie Lists</h2>
          <ul>
            {this.state.movies.map(movie => (
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

export default Movies;