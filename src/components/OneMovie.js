import React, { Component } from 'react';

export default class OneMovie extends Component {
  state = { movie: {} };

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => this.setState({ movie: data }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.movie.title}</h2>
        <p>{this.state.movie.description}</p>
        <p>{this.state.movie.director}</p>
        <p>{this.state.movie.producer}</p>
        <p>{this.state.movie.release_date}</p>
        <p>{this.state.movie.rt_score}</p>
      </div>
    );
  }
}
