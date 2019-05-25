import React, { Component } from "react";
import ComputerGame from "../domain/ComputerGameModel";
import ComputerGameDetails from "./ComputerGameDetails";

class ListOfComputerGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerGamesDB: [
        // new ComputerGame("FIFA 19", "Sport", 2018, true, true, ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc']),
        // new ComputerGame("League of Legends", "RPG", 2009, false, false, ['strategy', 'esport', 'pc']),
        // new ComputerGame("Wiedźmin 3: Dziki Gon", "RPG", 2015, false, false, ['pc', 'gameoftheyear', 'ps4'])
      ]
    };
  }
  componentDidMount() {
    this.callAPI();
  }
  // onAddItem = () => {
  //   // not allowed AND not working
  //   this.setState(state => {
  //     const list = state.list.push(state.value);

  //     return {
  //       list,
  //       value: '',
  //     };
  //   });
  // };

  callAPI(){
    fetch("http://localhost:4000/api/cgames/all")
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(res => {
          console.log(res)
          this.setState({ computerGamesDB: res })
        });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.computerGamesDB.map((x, i) => (
            <li key={i}>{x._name}</li>
          ))}
        </ul>
        <ComputerGameDetails computerGamesDB={this.state.computerGamesDB} />
      </div>
    );
  }
}

export default ListOfComputerGames;