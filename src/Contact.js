import React from "react";
import axios from "axios";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        
        return (
          <div>
            <h1>New Brewery 
            </h1>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>
                Name
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
                City
                <input type="text" value=
                {this.state.value} onChange=
                {this.handleChange}/>
              </label>
              <label>
                State
                <input type="text" value=
                {this.state.value} onChange=
                {this.handleChange}/>
              </label>
              <input type="submit" value="Submit" />
            </form>
            </div>
          );
        }
      }
 export default Contact;