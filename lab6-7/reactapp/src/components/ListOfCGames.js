import React, { Component } from "react";
import ComputerGame from "../domain/ComputerGameModel";
import ComputerGameDetails from "./ComputerGameDetails";

class ListOfComputerGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerGamesDB: [
        new ComputerGame(3, "FIFA 19", "Sport", 2018, true, true, ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc']),
        new ComputerGame(1, "League of Legends", "RPG", 2009, false, false, ['strategy', 'esport', 'pc']),
        new ComputerGame(2, "Wiedźmin 3: Dziki Gon", "RPG", 2015, false, false, ['pc', 'gameoftheyear', 'ps4'])
      ]
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.computerGamesDB.map((x, i) => (
            <li key={i}>{x.name}</li>
          ))}
        </ul>
        <ComputerGameDetails computerGamesDB={this.state.computerGamesDB} />
      </div>
    );
  }
}

export default ListOfComputerGames;