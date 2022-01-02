import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Genres extends Component {

  state = {
    genres: [],
    isLoaded: false,
    error: null
  }

  componentDidMount() {
    fetch('http://localhost:4000/v1/genres')
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
      .then(data => this.setState({ movies: data.genres, isLoaded: true },
        (error) => {
          this.setState({ isLoaded: true, error: error });
        }))
  }

  render() {
    const { genres, isLoaded, error } = this.state;
    return (
      <div>
        <h2>Genres</h2>
        <ul>
          {genres.map(m => (
            <li key={m.id}>
              <Link to={`/genre/${m.id}`}>{m.genre_name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}