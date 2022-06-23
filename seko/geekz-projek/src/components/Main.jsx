import React from 'react'
import '../css/Main.css'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="main">
        <div className="name1">
          <h3>Name :</h3>
          <div className="radio-buttons1">
          <input
              id="radioa"
              value="radioa"
              name="name1"
              type="radio"
              onChange={this.handleChange}
              />
              Radio A
              <input
              id="radiob"
              value="radiob"
              name="name1"
              type="radio"
              onChange={this.handleChange}
              />
            Radio B
          </div>
        </div>

        <div className="name2">
          <h3>Name :</h3>
          <div className="radio-buttons2">
            <input
                id="radioa"
                value="radioa"
                name="name2"
                type="radio"
                onChange={this.handleChange}
                />
                Radio A
                <input
                id="radiob"
                value="radiob"
                name="name2"
                type="radio"
                onChange={this.handleChange}
                />
                Radio B
                <input
                id="radiob"
                value="radiob"
                name="name2"
                type="radio"
                onChange={this.handleChange}
                />
                Radio C
          </div>
        </div>
      </div>
    );
  }
  }

  export default Main