import React, { Component } from "react";
import ComputerGameDetails from "./ComputerGameDetails";
import FormGame from "./Form";
const axios = require('axios')

class ListOfComputerGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerGamesDB: [],
      markedGame: {},
      cgame: {}
    // This binding is necessary to make `this` work in the callback
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.callAPI();
  }
  
  callAPI(){
    fetch("http://localhost:4000/api/cgames/all")
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(res => {
          // console.log(res)
          this.setState({ computerGamesDB: res })
        });
  };

  handleSubmit = async (event, game) => {
    console.log(event)
    console.log(game)
    event.preventDefault();
    await axios.post("http://localhost:4000/api/cgames/add", { cgame: game })
    await this.callAPI();
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.computerGamesDB.map((x, i) => (
            <li onClick={(e) => this.state.markedGame = x} key={i}>{x._name}</li>
          ))}
        </ul>
        <ComputerGameDetails game={this.state.markedGame} />
        <FormGame handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ListOfComputerGames;