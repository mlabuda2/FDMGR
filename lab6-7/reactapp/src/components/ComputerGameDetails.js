import React, { Component } from "react";

class ComputerGameDetails extends Component {
  componentDidMount() {}

  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const { computerGamesDB } = this.props;

    return (
      <div>
        {JSON.stringify(
          computerGamesDB[getRandomInt(0, computerGamesDB.length - 1)],
          null,
          4
        )}
      </div>
    );
  }
}

export default ComputerGameDetails;