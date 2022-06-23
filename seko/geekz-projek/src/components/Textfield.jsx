import React from 'react'
import '../css/Textfield.css'

class Textfield extends React.Component {

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
          <div className="textfield-head">
            <div className="textfield">
            <h3>Subcomponents!</h3>
            <div className="radio-buttons1">
            <div className="">
                <input
                    id="radioa"
                    value="radioa"
                    name="textfield"
                    type="radio"
                    onChange={this.handleChange}
                    />
                <input name="textfield" className="formtf" placeholder="Hey!" onChange={this.handleChange}/>
            </div>

            <div className="">
                <input
                id="radiob"
                value="radiob"
                name="textfield"
                type="radio"
                onChange={this.handleChange}
                />
               Representative Form
               </div>
            </div>
            </div>
          </div>
        );
      }
}

export default Textfield