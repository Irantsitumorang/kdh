import React from 'react';
import '../css/Evenother.css';

class Evenother extends React.Component {

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
          <div className="eveother-head">
            <div className="evenother">
            <h3 className="subcom-head"> Subcomponents!</h3>
            <div className="radio-buttons1">
            <div className="">
                <input
                    id="radioa"
                    value="radioa"
                    name="evenother"
                    type="radio"
                    onChange={this.handleChange}
                    />
                <input name="evenother" className="eo-ph1" type="text" placeholder="Hey!"/>
                <h6 className="inner-head">Inner Component</h6>
            </div>
               
               <div >
               <h3 className="input">input</h3>
               <input name="evenother" className="eo-ph2" placeholder="Other Subs"/>
               </div>

            <div className="">
                <h3 className="other-subs"> Other Subs</h3>
               <div>
                   <input className="eo-ph1" placeholder="Other Subs"/>
                   <button className="submit">Submit</button>
                   <button className="cancel">Cancel</button>
               </div>
               <div className="">
                   <h3 className="inner-comp">Inner Comp</h3>
                <input
                    id="radioa"
                    value="radioa"
                    name="evenother"
                    type="radio"
                    onChange={this.handleChange}
                    />
                <input name="evenother" className="eo-ph2" type="text" placeholder="Hey!"/>
                <h6 className="inner-component">Inner Component</h6>
                </div>
               </div>
            </div>
            </div>
          </div>
        );
      }
}

export default Evenother