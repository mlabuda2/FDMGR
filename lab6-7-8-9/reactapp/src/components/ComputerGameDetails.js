import React, { Component } from "react";

class ComputerGameDetails extends Component {
  componentDidMount() {}

  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const { game } = this.props;

    return (
      <div>
        {JSON.stringify(game)}
      </div>
    );
  }
}

export default ComputerGameDetails;