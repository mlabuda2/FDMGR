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
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.cgame)}>
            <label htmlFor="name">Name
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label htmlFor="relase">Relase
              <input type="text"  name="relase" onChange={this.handleChange} />
            </label> 
            <label htmlFor="category">Category
              <input type="text"  name="category" onChange={this.handleChange} />
            </label> 
            <label htmlFor="paytowin">Pay To Win?
              <input type="text"  name="payToWin" onChange={this.handleChange} />
            </label> 
            <label htmlFor="tags">Tags
              <input type="text"  name="tags" onChange={this.handleChange} />
            </label> 
            <input type="submit" value="Add game" />
        </form>
      </div>
    );
  }
}

export default Form;