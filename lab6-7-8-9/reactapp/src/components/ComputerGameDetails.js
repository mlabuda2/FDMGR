import React, { Component } from "react";
import FormGame from "./Form";

class ComputerGameDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      editedGame: {}
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ editedGame: nextProps.game });  
  }
  handleSubmit = async (event, game) => {
    event.preventDefault();
    game._id = this.state.editedGame._id
    console.log("CGD:",game)
    this.props.editGame(game);
  };
  render() {
    const { game } = this.props;
    
    return (
      <div>
        {JSON.stringify(game)}
        <div>
          { game._name
            ? 
            <div>
              <button onClick={(e) => this.props.deleteGame(game._id)}>Delete</button>
              <FormGame handleSubmit={this.handleSubmit} mode="Edit game"/>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

export default ComputerGameDetails;