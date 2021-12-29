import React, { Component } from 'react';

export default class Categories extends Component {
  render() {
    return (
      <div>
        <h2>Category: {this.props.title}</h2>

      </div>
    );
  }
}