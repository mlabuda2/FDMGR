//  /src/components/Form.js 
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cgame: {}
    };
  }
  handleChange = e => {
    const {name, value} = e.target;
    let cgame = {...this.state.cgame}
    cgame[name] = value;
    this.setState({cgame})
  };

  render() {
    const {mode} = this.props;
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.cgame)}>
            <label htmlFor="name">Name
              <input type="text" name="_name" onChange={this.handleChange} />
            </label>
            <label htmlFor="relase">Relase
              <input type="text"  name="_relase" onChange={this.handleChange} />
            </label> 
            <label htmlFor="category">Category
              <input type="text"  name="_category" onChange={this.handleChange} />
            </label> 
            <label htmlFor="paytowin">Pay To Win?
              <input type="text"  name="_payToWin" onChange={this.handleChange} />
            </label> 
            <label htmlFor="tags">Tags
              <input type="text"  name="_tags" onChange={this.handleChange} />
            </label> 
            <input type="submit" value={mode} />
        </form>
      </div>
    );
  }
}

export default Form;