//  /src/components/Form.js 
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cgame: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ cgame: nextProps.game });  
  }
  handleChange = (e) => {
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
              <input type="text" name="_name" value={this.state.cgame._name} onChange={(e) => this.handleChange(e)} />
            </label>
            <label htmlFor="relase">Relase
              <input type="text"  name="_relase" value={this.state.cgame._relase} onChange={(e) => this.handleChange(e)} />
            </label> 
            <label htmlFor="category">Category
              <input type="text"  name="_category" value={this.state.cgame._category} onChange={(e) => this.handleChange(e)} />
            </label> 
            <label htmlFor="paytowin">Pay To Win?
              <input type="text"  name="_payToWin" value={this.state.cgame._payToWin} onChange={(e) => this.handleChange(e)} />
            </label> 
            <label htmlFor="tags">Tags
              <input type="text"  name="_tags" value={this.state.cgame._tags} onChange={(e) => this.handleChange(e)} />
            </label> 
            <input type="submit" value={mode} />
        </form>
      </div>
    );
  }
}

export default Form;