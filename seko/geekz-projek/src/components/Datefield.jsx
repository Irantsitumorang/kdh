import React from 'react';
import '../css/Datefield.css'

class Datefield extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    handleChange = e => {
        const { name, id } = e.target;
    
        this.setState({
          [name]: id
        });
      };
    
      render() {
        return (
          <div className="datefield-head">
            <div className="datefield">
            <h3> Subcomponents!</h3>
            <h6>Inner Components</h6>
            <div className="radio-buttons1">
            <div className="">
                <input
                    id="radioa"
                    value="radioa"
                    name="datefield"
                    type="radio"
                    onChange={this.handleChange}
                    />
                <input className="kalender" name="datefield" type="date" value="2021-01-31" onChange={this.handleChange}/>
            </div>

            <div className="">
                <input
                id="radiob"
                value="radiob"
                name="datefield"
                type="radio"
                onChange={this.handleChange}
                />
               Representative Form
               </div>
               Text Field Component
            </div>
            </div>
          </div>
        );
      }
}

export default Datefield